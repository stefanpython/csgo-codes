import "./App.css";

function App() {
  // Handles button redirect
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="app">
      <div className="title-container">
        <img className="title" src="./title.png" alt="title" />
      </div>

      <div className="btn-container">
        <button>GIVEAWAYS</button>
        <button>STEAM GROUP</button>
      </div>

      <div className="mid-container">
        <hr className="left" />
        <div className="featured">FEATURED</div>
        <hr className="right" />
      </div>

      <div className="box-container">
        <div className="box">
          <div className="first-rectangle">
            <img className="empire-logo logo" src="./empire.svg" alt="empire" />
          </div>

          <div className="small-rectangles">
            <div className="small-box">
              <img src="" alt="" />
              Routette
            </div>

            <div className="small-box">
              <img src="" alt="" />
              Crash
            </div>

            <div className="small-box">
              <img src="" alt="" />
              Coinflip
            </div>
          </div>

          <div className="dotcode-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>

        <div className="box">
          <div className="first-rectangle">
            <img className="roll-logo logo" src="./roll.svg" alt="roll" />
          </div>

          <div className="small-rectangles">
            <div className="small-box">
              <img src="" alt="" />
              Roulette
            </div>

            <div className="small-box">
              <img src="" alt="" />
              Crash
            </div>

            <div className="small-box">
              <img src="" alt="" />
              Coinflip
            </div>
          </div>

          <div className="dotcode-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>

        <div className="box">
          <div className="first-rectangle">
            <img
              className="hell-logo logo"
              src="./hellcase.svg"
              alt="hellcase"
            />
          </div>

          <div className="small-rectangles"></div>

          <div className="dotcode-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>

        <div className="box">
          <div className="first-rectangle">
            <img className="daddy-logo" src="./daddy3.png" alt="daddy" />
          </div>

          <div className="small-rectangles"></div>

          <div className="dotcode-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
