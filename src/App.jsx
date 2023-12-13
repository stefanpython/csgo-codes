import "./App.css";
import "./Responsievness.css";

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
        <button className="present-btn">
          <img className="present-img" src="./present.png" alt="present" />
          <h1>GIVEAWAYS</h1>
        </button>
        <button className="steam-btn">
          <h1>STEAM GROUP</h1>
        </button>
      </div>

      <div className="searchbar">
        <input className="search" type="text" name="" id="" />
      </div>

      <div className="mid-container">
        <hr className="left" />
        <img className="star-icon" src="./star.png" alt="star" />
        <div className="featured">
          <h1>POPULAR</h1>
        </div>
        <hr className="right" />
      </div>

      <div className="box-container">
        <div className="box">
          <div class="rectangle-container">
            <div class="rectangle">
              <p>$ 0.50</p>
            </div>
          </div>

          <div className="right-title">
            <p>CSGOEMPIRE</p>
          </div>

          <div className="first-rectangle">
            <img className="empire-logo logo" src="./empire.svg" alt="empire" />
          </div>

          <div className="small-rectangles">
            <div className="small-box">
              <div className="small-img">
                <img src="./roulette.png" alt="roulette" />
              </div>

              <h1>ROULETTE</h1>
            </div>

            <div className="small-box">
              <div className="small-img">
                <img src="./crash.png" alt="crash" />
              </div>
              <h1>CRASH</h1>
            </div>

            <div className="small-box">
              <div className="small-img">
                <img src="./coin.png" alt="coin" />
              </div>
              <h1>COINFLIP</h1>
            </div>
          </div>

          <div className="dotcode-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>

        <div className="box">
          <div class="rectangle-container">
            <div class="rectangle">
              <p>$ 0.50</p>
            </div>
          </div>

          <div className="right-title">
            <p>CSGOROLL</p>
          </div>
          <div className="first-rectangle">
            <img className="roll-logo logo" src="./roll.svg" alt="roll" />
          </div>

          <div className="small-rectangles">
            <div className="small-box">
              <div className="small-img">
                <img src="./roulette.png" alt="roulette" />
              </div>
              <h1>ROULETTE</h1>
            </div>

            <div className="small-box">
              <div className="small-img">
                <img src="./crash.png" alt="crash" />
              </div>
              <h1>CRASH</h1>
            </div>

            <div className="small-box">
              <div className="small-img">
                <img src="./coin.png" alt="coin" />
              </div>
              <h1>COINFLIP</h1>
            </div>
          </div>

          <div className="dotcode-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>

        <div className="box">
          <div class="rectangle-container">
            <div class="rectangle">
              <p>$ 0.50</p>
            </div>
          </div>

          <div className="right-title">
            <p>HELLCASE</p>
          </div>
          <div className="first-rectangle">
            <img
              className="hell-logo logo"
              src="./hellcase.svg"
              alt="hellcase"
            />
          </div>

          <div className="small-rectangles"></div>

          <div className="dotcode-btn right-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>

        <div className="box">
          <div class="rectangle-container">
            <div class="rectangle">
              <p>$ 0.50</p>
            </div>
          </div>

          <div className="right-title">
            <p>DADDYSKINS</p>
          </div>
          <div className="first-rectangle">
            <img className="daddy-logo" src="./daddy3.png" alt="daddy" />
          </div>

          <div className="small-rectangles"></div>

          <div className="dotcode-btn right-btn">
            <button>+ CSGODOTCODE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
