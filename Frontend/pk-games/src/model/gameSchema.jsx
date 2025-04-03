const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  // Game Name (Required, Unique)
  gameName: {
    type: String,
    required: [true, "Game name is required"],
    unique: true,
    trim: true,
    maxlength: [100, "Game name cannot exceed 100 characters"],
  },

  // Price (Required, Minimum 0)
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"],
    set: (v) => Math.round(v), // Ensures price is stored as integer
  },

  // Rating (Nested Object)
  rating: {
    value: {
      type: Number,
      min: [0, "Rating must be at least 0"],
      max: [5, "Rating cannot exceed 5"],
      default: 0,
    },
    count: {
      type: Number,
      min: [0, "Rating count cannot be negative"],
      default: 0,
    },
  },

  // Description (Required)
  description: {
    type: String,
    required: true,
    minlength: [50, "Description should be at least 50 characters"],
    maxlength: [1000, "Description cannot exceed 1000 characters"],
  },

  // Genres (Array of Strings)
  genres: {
    type: [String],
    required: true,
    validate: {
      validator: function (genres) {
        return genres.length > 0 && genres.length <= 5;
      },
      message: "A game must have 1-5 genres",
    },
  },

  // Platforms (Array with Validation)
  platforms: {
    type: [String],
    required: true,
    enum: {
      values: ["PC", "PlayStation", "Xbox", "Nintendo", "Mobile"],
      message: "{VALUE} is not a supported platform",
    },
  },

  // Developer
  developer: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Developer name cannot exceed 100 characters"],
  },

  // Publisher
  publisher: {
    type: String,
    required: true,
    trim: true,
    maxlength: [100, "Publisher name cannot exceed 100 characters"],
  },

  // Release Date
  releaseDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (date) {
        return date <= new Date("2100-01-01"); // Future date validation
      },
      message: "Release date must be before 2100",
    },
  },

  // Image URL
  imageURL: {
    type: String,
    required: true,
    match: [
      /\.(png|jpg|jpeg|webp)$/i,
      "Only PNG, JPG, JPEG, or WEBP images are allowed",
    ],
    default: "/images/default-game.png",
  },

  // Release Status
  isReleased: {
    type: Boolean,
    default: function () {
      return this.releaseDate <= new Date(); // Auto-set based on release date
    },
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true, // Cannot be modified after creation
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the 'updatedAt' field before saving
gameSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Create text index for search functionality
gameSchema.index({
  gameName: "text",
  description: "text",
  genres: "text",
});

module.exports = mongoose.model("Game", gameSchema);
