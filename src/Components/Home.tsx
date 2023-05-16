export const Home = () => {
  return (
    <div className="home">
      <div
        id="navDiv"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="/assets/Images/logo.svg" alt="logo" />
          <img src="/assets/Images/right_symbol.svg" alt="logo" />
        </div>
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <img src="/assets/Images/search.svg" alt="search" />
          <img src="/assets/Images/mailbox.svg" alt="mailbox" />
          <img src="/assets/Images/notification.svg" alt="notification" />
          <img src="/assets/Images/question_circle.svg" alt="question circle" />
          <img src="/assets/Images/profile_pic.svg" alt="profile picture" />
        </div>
      </div>
      <div
        id="headingBelowNav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>WeWork + SalesForce</h1>
        <button>Publish/Share</button>
      </div>
      <div id="profileDiv">
        <img
          src="/assets/Images/img1.jpg"
          alt="img1"
          style={{
            position: "absolute",
          }}
        />
        <img
          src="/assets/Images/frame.jpg"
          alt="profile picture"
          style={{
            position: "absolute",
            left: "101px",
            top: "289px",
            borderRadius: "10px",
          }}
        />
      </div>
      <div
        id="headingDiv"
        style={{
          position: "absolute",
          top: "400px",
          color: "#233735",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h3>Project Scope Recap</h3>
        <img
          src="/assets/Images/action_plan.svg"
          alt="action plan"
          style={{ position: "absolute", left: "1170px" }}
        />
      </div>
      <div
        id="headersDiv"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "475px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <button>Basic Info</button>
          <button>Files</button>
          <button>Mutual Action Plan</button>
          <button>Contacts</button>
        </div>
        <div style={{ position: "absolute", left: "1270px", width: "200px" }}>
          <button>Internal Actions</button>
        </div>
      </div>
      <div
        id="mainDiv"
        style={{
          position: "absolute",
          left: "31px",
          top: "555px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "198px",
          }}
        >
          <ul style={{ listStyleType: "none", float: "left" }}>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                position: "absolute",
                left: "235px",
                top: 0,
                width: "150px",
              }}
            >
              Company Profile
            </h3>
            <img
              src="/assets/Images/Group 1000003477.svg"
              alt=""
              style={{
                position: "absolute",
                left: "1290px",
                top: 0,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: "230px",
              top: "70px",
            }}
          >
            <img src="/assets/Images/img2.jpg" alt="" />
            <img src="/assets/Images/msg_share.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
