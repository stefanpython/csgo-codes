import "./App.css";
import "./Responsievness.css";
import "./Dropdown.css";

function App() {
  // Handles button redirect
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  // Dropdown button
  function toggleDropdown() {
    var dropdown = document.getElementById("gameDropdown");
    dropdown.classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-btn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
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

      <div className="mid-container">
        <hr className="left" />
        <img className="star-icon" src="./star.png" alt="star" />
        <div className="featured">
          <h1>POPULAR</h1>
        </div>
        <hr className="right" />
      </div>

      <div className="filter-search">
        <div className="searchbar-container">
          <input
            className="search"
            type="text"
            name=""
            id=""
            placeholder="Type to filter"
          />

          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleDropdown()}>
              Sort by
            </button>
            <div className="dropdown-content" id="gameDropdown">
              <a href="#">Roulette</a>
              <a href="#">Crash</a>
              <a href="#">Coinflip</a>
            </div>
          </div>
        </div>
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
            <img className="daddy-logo logo" src="./daddy3.png" alt="daddy" />
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
