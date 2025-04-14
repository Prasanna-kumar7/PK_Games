import React from "react";
import "../Support/Support.css";
import faq from "../../images/faq.png";
import contactSupport from "../../images/contact-support.png";
import troubleshoot from "../../images/troubleshoot.png";
import communitySupport from "../../images/community-support.png";
import refund from "../../images/refund.png";
import systemReq from "../../images/system-req.png";
import server from "../../images/server-status.png";

const Support = () => {
  return (
    <div className="support-container">
      <div className="support_head">
        <h1 className="support_head-title">Need Help? We’ve Got Your Back!</h1>
        <h2 className="support_head-title-sub">Game On, Worry Less</h2>
        <p className="support_head-text">
          Whether you’re stuck with a download, need troubleshooting tips, or
          just have a question, the PK Games Support team is here to save the
          day. Explore our resources below or reach out directly – we’re always
          ready to help!
        </p>
      </div>
      <div className="support_wraper">
        <div className="support_content">
          <img src={faq} alt="faq" className="support_content-image" />
          <div className="support_content-wraper">
            <h3 className="support_content-title">
              Frequently Asked Questions (FAQs)
            </h3>
            <p className="support_content-text">
              • Game Downloads: "Why is my download stuck?"
              <br />
              Check your internet connection, clear launcher cache, or restart
              the PK Games Launcher.
              <br />
              • Account Issues: "How do I reset my password?"
              <br />
              Visit the "Forgot Password" page [here] or contact support for
              assistance.
              <br />• Payment Problems: "My purchase didn’t go through – what
              now?"
              <br />
              Ensure your card details are correct, or try an alternate payment
              method.
            </p>
          </div>
        </div>

        <div className="support_content">
          <div className="support_content-wraper">
            <h3 className="support_content-title">Contact Support</h3>
            <p className="support_content-text">
              • Email Us: Send a detailed message to [support@pkgames.com] – we
              reply within 12 hours.
              <br />
              • Social Media: DM us on [Twitter/Facebook/Instagram] for quick
              updates.
              <br />
            </p>
          </div>
          <img
            src={contactSupport}
            alt="faq"
            className="support_content-image"
          />
        </div>

        <div className="support_content">
          <img src={troubleshoot} alt="faq" className="support_content-image" />
          <div className="support_content-wraper">
            <h3 className="support_content-title">Troubleshooting Guides</h3>
            <p className="support_content-text">
              • Launcher Won’t Open?
              <br />
              Update your graphics drivers or reinstall the PK Games Launcher.
              <br />
              • Game Crashes?
              <br />
              Verify game files via the launcher or lower in-game graphics
              settings.
              <br />
              Download Speed Slow?
              <br />
              Pause/restart downloads or switch to a wired connection.
            </p>
          </div>
        </div>

        <div className="support_content">
          <div className="support_content-wraper">
            <h3 className="support_content-title">Community Support</h3>
            <p className="support_content-text">
              • Forums: Share issues, tips, and tricks with fellow players.
              <br />
              • Discord Server: Join live discussions with 50,000+ members
              [Invite Link].
              <br />• Guides & Tutorials: Browse player-made guides for popular
              games.
            </p>
          </div>
          <img
            src={communitySupport}
            alt="faq"
            className="support_content-image"
          />
        </div>

        <div className="support_content">
          <img src={refund} alt="faq" className="support_content-image" />
          <div className="support_content-wraper">
            <h3 className="support_content-title">Refund & Policy Help</h3>
            <p className="support_content-text">
              • Refund Requests: Submit within 14 days of purchase if the game
              hasn’t been played for over 2 hours.
              <br />• Terms of Service: Read our policies [here] for account
              safety and usage guidelines.
            </p>
          </div>
        </div>

        <div className="support_content">
          <div className="support_content-wraper">
            <h3 className="support_content-title">System Requirements</h3>
            <p className="support_content-text">
              Check minimum and recommended specs for:
              <br />
              • PK Games Launcher: Windows 10+, 4GB RAM, 2GB storage.
              <br />• Popular Games: Browse specs for individual titles in their
              store pages.
            </p>
          </div>
          <img src={systemReq} alt="faq" className="support_content-image" />
        </div>

        <div className="support_content">
          <img src={server} alt="faq" className="support_content-image" />
          <div className="support_content-wraper">
            <h3 className="support_content-title">Server Status</h3>
            <p className="support_content-text">
              • Check our [Server Status Dashboard] for live updates on outages
              or maintenance.
              <br />• Subscribe to alerts via email or SMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
