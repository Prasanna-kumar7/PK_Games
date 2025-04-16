import React from "react";
import "./Cart.css"; // style as needed

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (gameToRemove) => {
    setCart(cart.filter((game) => game.gameName !== gameToRemove.gameName));
  };

  const totalPrice = cart.reduce((acc, game) => acc + game.price, 0);
  const tax = cart.length > 0 ? 100 : 0;
  const finalTotal = totalPrice + tax;

  return (
    <main className="cart_container">
      <div className="cart_head">
        <h2>My Cart</h2>
      </div>
      <div className="cart_wraper-container">
        <div className="cart_wraper">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((game) => (
              <section key={game.gameName} className="cart_item">
                <img
                  className="cart_item-image"
                  src={game.imageURL}
                  alt={game.gameName}
                />
                <div className="cart_item-content">
                  <p className="cart_item-title">{game.gameName}</p>
                  <p className="cart_item-price">₹{game.price}</p>
                  <button
                    className="cart_item-button"
                    onClick={() => removeFromCart(game)}
                  >
                    Remove
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        <aside className="cart_orders-container">
          <section className="cart_orders-wraper">
            <div className="cart_orders-prices">
              <p>Price</p>
              <p>₹{totalPrice}</p>
              <p>Taxes</p>
              <p>₹{tax}</p>
              <p>Total</p>
              <p>₹{finalTotal}</p>
            </div>
            <hr />
            <div className="cart_orders-payment">
              <h3>Payment Methods</h3>
              <div className="cart_orders-payment-cc">
                <h3>Credit Card</h3>
                <input type="number" placeholder="Card Number" />
                <input type="text" placeholder="Name on Card" />
                <div className="cc_card-sub">
                  <input type="text" placeholder="Expiration" />
                  <input type="number" placeholder="CVV" />
                </div>
              </div>
              <button>Place Order</button>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
