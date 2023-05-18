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
      <div className="headersDiv">
        <div className="headersDivLeft">
          <button>Basic Info</button>
          <button>Files</button>
          <button>Mutual Action Plan</button>
          <button>Contacts</button>
        </div>
        <div className="headersDivRight">
          <button>Internal Actions</button>
        </div>
      </div>
      <div
        className="mainDiv">
        <div className="overview">
          <ul>
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
          <div className='companyProfile'>
            <h3>
              Company Profile
            </h3>
            <img
              src="/assets/Images/Group 1000003477.svg"
              alt="" />
          </div>
          <div className='msgShareBtn'>
            <img src="/assets/Images/img2.svg" alt="img2" width="1195px" />
            <img src="/assets/Images/msg_share.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
