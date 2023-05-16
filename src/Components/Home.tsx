export const Home = () => {
  return (
    <div className="home">
      <div id="navDiv">
        <div>
          <img src="/assets/Images/logo.jpg" alt="logo" />
          <img src="/assets/Images/right_symbol.jpg" alt="logo" />
        </div>
        <div>
          <img src="/assets/Images/search.jpg" alt="search" />
          <img src="/assets/Images/mailbox.jpg" alt="mailbox" />
          <img src="/assets/Images/notification.jpg" alt="notification" />
          <img src="/assets/Images/question_circle.jpg" alt="question circle" />
          <img src="/assets/Images/profile_pic.jpg" alt="profile picture" />
        </div>
      </div>
      <div id="headingBelowNav">
        <h1>WeWork + SalesForce</h1>
        <button>Publish/Share</button>
      </div>
      <div id="profileDiv">
        <img src="/assets/Images/img1.jpg" alt="question circle" />
        <img src="/assets/Images/frame.jpg" alt="profile picture" />
      </div>
      <div id="headingDiv">
        <h3>Project Scope Recap</h3>
        <img src="/assets/Images/action_plan.jpg" alt="" />
      </div>
      <div id="headersDiv">
        <div>
          <button>Basic Info</button>
          <button>Files</button>
          <button>Mutual Action Plan</button>
          <button>Contacts</button>
        </div>
        <div>
          <button>Internal Actions</button>
        </div>
      </div>
      <div id="mainDiv">
        <div
          style={{
            // position: "absolute",
            width: "198px",
            height: "290px",
            left: "31px",
            top: "555px",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <ul style={{ listStyleType: "none" }}>
            <h3>Overview</h3>
            <hr />
            <li>Welcome</li> <hr />
            <li>Product Capabilities</li> <hr />
            <li>Customer Success Stories</li> <hr />
            <li>File Sharing</li> <hr />
            <li>Our Deck</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Company Profile</h3>
            <img src="/assets/Images/Group 1000003477.jpg" alt="" />
          </div>
          <img src="/assets/Images/img2.jpg" alt="" />
          <img src="/assets/Images/msg_share.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
