import "./InfoPanel.css";

const InfoPanel = () => {
  return (
    <div className="info-box">
      <div className="title-right">
        <p>CSGORoll</p>
      </div>

      <div className="header-container">
        <div className="logo-div">
          <img className="logo-img" src="./roll.svg" alt="" />
        </div>

        <div className="bonus-div">
          <h1>5% BONUS ON DEPOSIT</h1>
        </div>

        <div className="rating-div">
          <div className="rating">
            <h2>Rating</h2>
          </div>

          <div className="rating-box">
            <h2>6.9</h2>
          </div>
        </div>
      </div>

      <div className="mid">
        <div className="deposits-container">
          <div className="title-mid">
            <h3>Deposits</h3>
          </div>

          <div className="buttons-grid">
            <button>
              <img className="" src="./buttons/bitcoin.png" alt="" />
              <p>Bitcoin</p>
            </button>

            <button>
              <img className="" src="./buttons/ether.png" alt="" />
              <p>Ethereum</p>
            </button>

            <button>
              <img className="" src="./buttons/paypall.png" alt="" />
              <p>Paypal</p>
            </button>

            <button>
              <img className="" src="./buttons/bank.png" alt="" />
              <p>Bank</p>
            </button>

            <button>
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
            <button>
              <img className="" src="./buttons/bitcoin.png" alt="" />
              <p>Bitcoin</p>
            </button>

            <button>
              <img className="" src="./buttons/ether.png" alt="" />
              <p>Ethereum</p>
            </button>

            <button>
              <img className="" src="./buttons/paypall.png" alt="" />
              <p>Paypal</p>
            </button>

            <button>
              <img className="" src="./buttons/bank.png" alt="" />
              <p>Bank</p>
            </button>

            <button>
              <img className="" src="./buttons/skins.png" alt="" />
              <p>Skins</p>
            </button>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="left-box">
          <h3>Code</h3>

          <button>Jofa</button>

          <div className="clipboard">
            <p>Click to copy</p>
            <img className="copy-icon" src="./buttons/clipboard.png" alt="" />
          </div>
        </div>

        <div className="right-box">
          <h3>Description </h3>

          <h5>
            Corporis minus culpa ipsam et adipisci. Dicta asperiores excepturi
            omnis sunt. Magni repellendus nihil quis aliquam nemo consequatur
            quod velit. Placeat ullam ut voluptatem. Consequatur doloribus
            impedit voluptas nulla quibusdam rem.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
