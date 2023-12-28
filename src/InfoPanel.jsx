import "./InfoPanel.css";
import "./Responsievness.css";
import CopyToClipboard from "react-copy-to-clipboard";

const InfoPanel = ({ onMouseEnter, onMouseLeave, onClose, data }) => {
  // Handles button redirect
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  // Handles closing the InfoPanel
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className="info-box"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="title-right">
        <p>{data.name}</p>
      </div>

      <div className="header-container">
        <div className="logo-div">
          <img className="logo-img" src={`${data.img}`} alt="" />
        </div>

        <div className="bonus-div">
          <h1>{data.bonus}% BONUS ON DEPOSIT</h1>
        </div>

        <div className="rating-div">
          <div className="rating">
            <h2>Rating</h2>
          </div>

          <div className="rating-box">
            <h2>{data.rating}</h2>
          </div>
        </div>
      </div>

      <div className="mid">
        <div className="deposits-container">
          <div className="title-mid">
            <h3>Deposits</h3>
          </div>

          <div className="buttons-grid">
            <button
              onClick={
                () => handleButtonClick("http://www.google.com") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/bitcoin.png" alt="" />
              <p>Bitcoin</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/ether.png" alt="" />
              <p>Ethereum</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/paypall.png" alt="" />
              <p>Paypal</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/bank.png" alt="" />
              <p>Bank</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/skins.png" alt="" />
              <p>Skins</p>
            </button>
          </div>
        </div>

        <div className="withdrawals-container">
          <div className="title-mid">
            <h3>Withdrawals</h3>
          </div>

          <div className="buttons-grid">
            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/bitcoin.png" alt="" />
              <p>Bitcoin</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/ether.png" alt="" />
              <p>Ethereum</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/paypall.png" alt="" />
              <p>Paypal</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/bank.png" alt="" />
              <p>Bank</p>
            </button>

            <button
              onClick={
                () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
              }
            >
              <img className="" src="./buttons/skins.png" alt="" />
              <p>Skins</p>
            </button>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="left-box">
          <h3>Code</h3>

          {/* Implement copying code button */}
          <CopyToClipboard text="Jofa" onCopy={() => alert("Copied!")}>
            {/* Put in here between button tags what you want to be copied, eg here is Jofa, <button>HERE</button> */}
            <button>{data.code}</button>
          </CopyToClipboard>

          <div className="clipboard">
            <p>Click to copy</p>
            <img className="copy-icon" src="./buttons/clipboard.png" alt="" />
          </div>
        </div>

        <div className="right-box">
          <h3>Description </h3>

          <h5>{data.description}</h5>
        </div>
      </div>

      <div className="close-div" onClick={handleClose}>
        <p>
          <span className="close">close </span> X
        </p>
      </div>
    </div>
  );
};

export default InfoPanel;
