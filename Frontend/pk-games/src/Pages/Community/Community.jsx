import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "../Community/community.css";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";
import user5 from "../../images/user5.jpg";
import user6 from "../../images/user6.jpg";

const Community = () => {
  return (
    <div className="community_container">
      <main className="community_wraper">
        <article className="community_card">
          <div className="community_user">
            <img src={user1} alt="user 1" className="community_user-image" />
            <div className="community_user-text">
              <p className="community_user-name">AerisRising</p>
              <p className="community_user-time">Played for 88:12 Hrs</p>
            </div>
            <div className="community_user-comment-likes">
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="community_game-content">
            <img
              src="https://i.ibb.co/rRV6zw8g/ff7-rebirth.png"
              alt="FINAL FANTASY VII REBIRTH"
              className="community_game-image"
            />
            <div className="community_game-text">
              <p className="community_game-title">FINAL FANTASY VII REBIRTH</p>
              <p className="community_game-comment">
                This isn’t just a remake—it’s a reimagining done right. The
                expanded world, character moments, and emotional weight? Chef’s
                kiss. I cried. Twice.
              </p>
            </div>
            <div className="community_game-comment-reply">
              <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />
            </div>
          </div>
        </article>

        <article className="community_card">
          <div className="community_user">
            <img src={user2} alt="user 2" className="community_user-image" />
            <div className="community_user-text">
              <p className="community_user-name">BillyTheBleat</p>
              <p className="community_user-time">Played for 41:20 Hrs</p>
            </div>
            <div className="community_user-comment-likes">
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="community_game-content">
            <img
              src="https://i.ibb.co/8q7s7kX/goat-sim-remastered.png"
              alt="Goat Simulator: Remastered"
              className="community_game-image"
            />
            <div className="community_game-text">
              <p className="community_game-title">Goat Simulator: Remastered</p>
              <p className="community_game-comment">
                Chaos. Absolute, glorious chaos. I licked a car, exploded into
                space, and became the Goat Queen in under 10 minutes. 10/10
                would headbutt reality again.
              </p>
            </div>
            <div className="community_game-comment-reply">
              <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />
            </div>
          </div>
        </article>

        <article className="community_card">
          <div className="community_user">
            <img src={user3} alt="user 3" className="community_user-image" />
            <div className="community_user-text">
              <p className="community_user-name">RagnarBorn</p>
              <p className="community_user-time">Played for 102:55 Hrs</p>
            </div>
            <div className="community_user-comment-likes">
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="community_game-content">
            <img
              src="https://i.ibb.co/YqrJFn0/god-of-war-ragnarok.png"
              alt="God of War Ragnarök"
              className="community_game-image"
            />
            <div className="community_game-text">
              <p className="community_game-title">God of War Ragnarök</p>
              <p className="community_game-comment">
                Kratos and Atreus took me on a mythological emotional journey I
                didn’t know I needed. Every axe throw feels like thunder. This
                is storytelling on god-tier levels.
              </p>
            </div>
            <div className="community_game-comment-reply">
              <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />
            </div>
          </div>
        </article>

        <article className="community_card">
          <div className="community_user">
            <img src={user4} alt="user 4" className="community_user-image" />
            <div className="community_user-text">
              <p className="community_user-name">ViceKing84</p>
              <p className="community_user-time">Played for 145:33 Hrs</p>
            </div>
            <div className="community_user-comment-likes">
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="community_game-content">
            <img
              src="https://i.ibb.co/SXDhP2Vd/gta5-enhanced.jpg"
              alt="Grand Theft Auto V Enhanced"
              className="community_game-image"
            />
            <div className="community_game-text">
              <p className="community_game-title">
                Grand Theft Auto V Enhanced
              </p>
              <p className="community_game-comment">
                Los Santos in 4K is a whole new beast. From heists to hijinks,
                the city’s alive—and sometimes insane. Still can’t believe
                Trevor exists.
              </p>
            </div>
            <div className="community_game-comment-reply">
              <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />
            </div>
          </div>
        </article>

        <article className="community_card">
          <div className="community_user">
            <img src={user5} alt="user 5" className="community_user-image" />
            <div className="community_user-text">
              <p className="community_user-name">DinoTycoonX</p>
              <p className="community_user-time">Played for 59:48 Hrs</p>
            </div>
            <div className="community_user-comment-likes">
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="community_game-content">
            <img
              src="https://i.ibb.co/Q3tcJ2rs/jurassic-world-2.png"
              alt="Jurassic World Evolution 2"
              className="community_game-image"
            />
            <div className="community_game-text">
              <p className="community_game-title">Jurassic World Evolution 2</p>
              <p className="community_game-comment">
                I came to build a dino sanctuary… ended up watching my T-Rex
                break free and cause a park-wide panic. Absolute perfection in
                chaos management.
              </p>
            </div>
            <div className="community_game-comment-reply">
              <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />
            </div>
          </div>
        </article>

        <article className="community_card">
          <div className="community_user">
            <img src={user6} alt="user 6" className="community_user-image" />
            <div className="community_user-text">
              <p className="community_user-name">BohemiaBlade</p>
              <p className="community_user-time">Played for 77:26 Hrs</p>
            </div>
            <div className="community_user-comment-likes">
              <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
          <div className="community_game-content">
            <img
              src="https://i.ibb.co/rRV6zw8g/ff7-rebirth.png"
              alt="Kingdom Come: Deliverance II"
              className="community_game-image"
            />
            <div className="community_game-text">
              <p className="community_game-title">
                Kingdom Come: Deliverance II
              </p>
              <p className="community_game-comment">
                No dragons, no magic—just raw medieval grit. I learned how to
                read, how to fight, and how to survive a very real, very harsh
                world. Totally immersive.
              </p>
            </div>
            <div className="community_game-comment-reply">
              <FontAwesomeIcon icon={faComments} style={{ color: "#ffffff" }} />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Community;
