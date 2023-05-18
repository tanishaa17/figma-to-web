import '../SCSS/main.css'


export const Home = () => {
  return (
    <div className="home">
      <div
        className="navDiv">
        <div className="navDivLeft">
          <img src="/assets/Images/logo.svg" alt="logo" />
          <img src="/assets/Images/right_symbol.svg" alt="logo" />
        </div>
        <div className="navDivRight">
          <img src="/assets/Images/search.svg" alt="search" />
          <img src="/assets/Images/mailbox.svg" alt="mailbox" />
          <img src="/assets/Images/notification.svg" alt="notification" />
          <img src="/assets/Images/question_circle.svg" alt="question circle" />
          <img src="/assets/Images/profile_pic.svg" alt="profile picture" />
        </div>
      </div>
      <div
        className="headingBelowNav">
        <h1>WeWork + SalesForce</h1>
        <button>Publish/Share</button>
      </div>
      <div className="profileDiv">
        <img
          src="/assets/Images/img1.svg"
          alt="img1" />
        <img
          src="/assets/Images/frame.jpg"
          alt="frame"
        />
      </div>
      <div
        className="headingDiv">
        <h3>Project Scope Recap</h3>
        <img
          src="/assets/Images/action_plan.svg"
          alt="action plan"
        />
      </div>
      <div
        className="headersDiv">
        <div className="headersDivLeft"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <button>Basic Info</button>
          <button >Files</button>
          <button >Mutual Action Plan</button>
          <button >Contacts</button>
        </div>
        <div className="headersDivRight" style={{ position: "absolute", left: "1270px", width: "200px" }}>
          <button style={{
            color: "#657372",
            border: "1px solid #BDC3C2",
            fontWeight: "600",
            height: "30px"
          }}>Internal Actions</button>
        </div>
      </div>
      <div
        className="mainDiv"
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
            position: "absolute"
          }}
        >
          <ul style={{ listStyleType: "none", color: "#7B8786" }}>
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
                color: "#233735"
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
            <img src="/assets/Images/img2.svg" alt="img2" width="1195px" />
            <img src="/assets/Images/msg_share.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
