import { useState } from "react";
import "./App.css";
import "./Responsievness.css";
import "./Dropdown.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  // Handles button redirect
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  // Handle input search value
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Handle dropdown button options
  const handleDropdownClick = (option) => {
    setSelectedOption(option);
  };

  // Fiter search by input
  const filteredBoxes = (boxName) => {
    const lowerCaseSearch = searchInput.toLowerCase();
    return (
      boxName.toLowerCase().includes(lowerCaseSearch) &&
      (selectedOption ? boxName.includes(selectedOption) : true)
    );
  };

  // Handle dropdown button
  const toggleDropdown = () => {
    const dropdown = document.getElementById("gameDropdown");
    dropdown.classList.toggle("show");
  };

  // Hide dropdown if user clicks outside it`s options
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
        <button
          className="present-btn"
          onClick={
            () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
          }
        >
          <img className="present-img" src="./present.png" alt="present" />
          <h1>GIVEAWAYS</h1>
        </button>
        <button
          className="steam-btn"
          onClick={
            () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
          }
        >
          <h1>STEAM GROUP</h1>
        </button>
      </div>

      <div className="filter-search">
        <div className="searchbar-container">
          <input
            className="search"
            type="text"
            name="search"
            id="searc"
            placeholder="Type to Filter..."
            value={searchInput}
            onChange={handleInputChange}
          />

          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleDropdown()}>
              Sort by
            </button>
            <div className="dropdown-content" id="gameDropdown">
              <a href="#" onClick={() => handleDropdownClick("")}>
                SHOW ALL
              </a>
              <a href="#" onClick={() => handleDropdownClick("ROULETTE")}>
                ROULETTE
              </a>
              <a href="#" onClick={() => handleDropdownClick("CRASH")}>
                CRASH
              </a>
              <a href="#" onClick={() => handleDropdownClick("COINFLIP")}>
                COINFLIP
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mid-container">
        <hr className="left" />
        <img className="star-icon" src="./star2.png" alt="star" />
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
              <button
                onClick={
                  () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
                }
              >
                + CSGODOTCODE
              </button>
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
              <button
                onClick={
                  () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
                }
              >
                + CSGODOTCODE
              </button>
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
              <button
                onClick={
                  () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
                }
              >
                + CSGODOTCODE
              </button>
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
              <button
                onClick={
                  () => handleButtonClick("ADD WEBSITE LINK HERE INSIDE QUOTES") // ADD WEBSITE LINK HERE eg: http://www.google.com - make sure it has http:// or https:// prefix
                }
              >
                + CSGODOTCODE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
