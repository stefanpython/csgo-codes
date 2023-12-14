import React, { useState } from "react";
import "./App.css";
import "./Responsievness.css";
import "./Dropdown.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleDropdownClick = (option) => {
    setSelectedOption(option);
  };

  const filteredBoxes = (boxName) => {
    const lowerCaseSearch = searchInput.toLowerCase();
    return (
      boxName.toLowerCase().includes(lowerCaseSearch) &&
      (selectedOption ? boxName.includes(selectedOption) : true)
    );
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById("gameDropdown");
    dropdown.classList.toggle("show");
  };

  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-btn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
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

      <div className="filter-search">
        <div className="searchbar-container">
          <input
            className="search"
            type="text"
            name=""
            id=""
            placeholder="Type to filter"
            value={searchInput}
            onChange={handleInputChange}
          />

          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleDropdown()}>
              Sort by
            </button>
            <div className="dropdown-content" id="gameDropdown">
              <a href="#" onClick={() => handleDropdownClick("")}>
                Show All
              </a>
              <a href="#" onClick={() => handleDropdownClick("ROULETTE")}>
                Roulette
              </a>
              <a href="#" onClick={() => handleDropdownClick("CRASH")}>
                Crash
              </a>
              <a href="#" onClick={() => handleDropdownClick("COINFLIP")}>
                Coinflip
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mid-container">
        <hr className="left" />
        <img className="star-icon" src="./star.png" alt="star" />
        <div className="featured">
          <h1>FEATURED</h1>
        </div>
        <hr className="right" />
      </div>

      <div className="box-container">
        {filteredBoxes("ROULETTE CRASH COINFLIP") && (
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
              <img
                className="empire-logo logo"
                src="./empire.svg"
                alt="empire"
              />
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
        )}

        {filteredBoxes("ROULETTE CRASH COINFLIP") && (
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
        )}

        {filteredBoxes("") && (
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
        )}

        {filteredBoxes("") && (
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
        )}
      </div>
    </div>
  );
}

export default App;
