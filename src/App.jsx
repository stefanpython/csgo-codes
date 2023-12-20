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
        </div>

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

      <div className="lines-container">
        <div className="mid-container">
          <hr className="left" />
          <img className="star-icon" src="./star2.png" alt="star" />
          <div className="featured">
            <h1>FEATURED</h1>
          </div>
          <hr className="right" />
        </div>

        <div className="mid-container second-mid">
          <hr className="left" />
          <div className="all-sites">
            <h1>ALL SITES</h1>
          </div>
          <hr className="right" />
        </div>
      </div>

      <div className="box-container">
        {filteredBoxes("ROULETTE CRASH COINFLIP CSGOEMPIRE") && (
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

            <div className="small-rectangles other-rectangle">
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

            <div className="dotcode-btn other-btn">
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

        {filteredBoxes("ROULETTE CRASH COINFLIP ROLL") && (
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
              <img className="roll-logo" src="./roll.svg" alt="roll" />
            </div>

            <div className="small-rectangles other-rectangle">
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

            <div className="dotcode-btn other-btn">
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

        {/* ADD ALL SEARCH NAMES INSIDE THE QUOTES IN filteredBoxes("").
        For example if you want the panel to be searched only by roulette,
        crash, hellcase - Add these names here with space between words like so:

        filteredBoxes("ROULETTE CRASH HELLCASE")
        */}

        {filteredBoxes("HELLCASE") && (
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

            <div className="small-rectangles other-rectangle"></div>

            <div className="dotcode-btn other-btn">
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

        {/* ADD ALL SEARCH NAMES INSIDE THE QUOTES IN filteredBoxes("").
        For example if you want the panel to be searched only by roulette,
        crash, hellcase - Add these names here with space between words like so:

        filteredBoxes("ROULETTE CRASH HELLCASE")
        */}
        {filteredBoxes("DADDYSKINS") && (
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

            <div className="small-rectangles other-rectangle"></div>

            <div className="dotcode-btn other-btn">
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

        {/* ------------------ The other 4 panels ------------------- */}

        {/* ADD ALL SEARCH NAMES INSIDE THE QUOTES IN filteredBoxes("").
        For example if you want the panel to be searched only by roulette,
        crash, hellcase - Add these names here with space between words like so:

        filteredBoxes("ROULETTE CRASH HELLCASE")
        */}
        {filteredBoxes(">>> ADD ALL SEARCH NAMES HERE <<<") && (
          <div className="box other-box">
            <div class="rectangle-container">
              <div class="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <p>PUT NAME HERE</p>
            </div>
            <div className="first-rectangle">
              {/* CHANGE LOGO HERE inside src="./logoname.extension" eg: "src="./logo.svg"  */}
              <img className="logo" src="./ADD LOGO HERE" alt="logo" />
            </div>

            <div className="small-rectangles other-rectangle">
              {/* 
              TO ADD, REMOVE ROULETTE, CRASH, COINFLIP, YOU CAN REMOVE
              ANY OR ALL OF THE div className="small-box" from start to end:
               */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./roulette.png" alt="roulette" />
                </div>

                <h1>ROULETTE</h1>
              </div>
              {/* END */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./crash.png" alt="crash" />
                </div>
                <h1>CRASH</h1>
              </div>
              {/* END */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./coin.png" alt="coin" />
                </div>
                <h1>COINFLIP</h1>
              </div>
              {/* END */}
            </div>

            <div className="dotcode-btn other-btn">
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

        {/* ADD ALL SEARCH NAMES INSIDE THE QUOTES IN filteredBoxes("").
        For example if you want the panel to be searched only by roulette,
        crash, hellcase - Add these names here with space between words like so:

        filteredBoxes("ROULETTE CRASH HELLCASE")
        */}
        {filteredBoxes(">>> ADD ALL SEARCH NAMES HERE <<<") && (
          <div className="box other-box">
            <div class="rectangle-container">
              <div class="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <p>PUT NAME HERE</p>
            </div>
            <div className="first-rectangle">
              {/* CHANGE LOGO HERE inside src="./logoname.extension" eg: "src="./logo.svg"  */}
              <img className="logo" src="./ADD LOGO HERE" alt="logo" />
            </div>

            <div className="small-rectangles other-rectangle">
              {/* 
              TO ADD, REMOVE ROULETTE, CRASH, COINFLIP, YOU CAN REMOVE
              ANY OR ALL OF THE div className="small-box" from start to end:
               */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./roulette.png" alt="roulette" />
                </div>

                <h1>ROULETTE</h1>
              </div>
              {/* END */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./coin.png" alt="coin" />
                </div>
                <h1>COINFLIP</h1>
              </div>
              {/* END */}
            </div>

            <div className="dotcode-btn other-btn">
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

        {/* ADD ALL SEARCH NAMES INSIDE THE QUOTES IN filteredBoxes("").
        For example if you want the panel to be searched only by roulette,
        crash, hellcase - Add these names here with space between words like so:

        filteredBoxes("ROULETTE CRASH HELLCASE")
        */}
        {filteredBoxes(">>> ADD ALL SEARCH NAMES HERE <<<") && (
          <div className="box other-box">
            <div class="rectangle-container">
              <div class="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <p>PUT NAME HERE</p>
            </div>
            <div className="first-rectangle">
              {/* CHANGE LOGO HERE inside src="./logoname.extension" eg: "src="./logo.svg"  */}
              <img className="logo" src="./ADD LOGO HERE" alt="logo" />
            </div>

            <div className="small-rectangles other-rectangle">
              {/* 
              TO ADD, REMOVE ROULETTE, CRASH, COINFLIP, YOU CAN REMOVE
              ANY OR ALL OF THE div className="small-box" from start to end:
               */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./roulette.png" alt="roulette" />
                </div>

                <h1>ROULETTE</h1>
              </div>
              {/* END */}
            </div>

            <div className="dotcode-btn other-btn">
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

        {/* ADD ALL SEARCH NAMES INSIDE THE QUOTES IN filteredBoxes("").
        For example if you want the panel to be searched only by roulette,
        crash, hellcase - Add these names here with space between words like so:

        filteredBoxes("ROULETTE CRASH HELLCASE")
        */}
        {filteredBoxes(">>> ADD ALL SEARCH NAMES HERE <<<") && (
          <div className="box other-box">
            <div class="rectangle-container">
              <div class="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <p>PUT NAME HERE</p>
            </div>
            <div className="first-rectangle">
              {/* CHANGE LOGO HERE inside src="./logoname.extension" eg: "src="./logo.svg"  */}
              <img className="logo" src="./ADD LOGO HERE" alt="logo" />
            </div>

            <div className="small-rectangles other-rectangle">
              {/* SMALL-BOX INSIDE THIS CONTAINER WHICH STARS HERE */}

              {/* 
              TO ADD OR REMOVE ANY OF THE BOXES WITH ROULETTE, CRASH, COINFLIP, YOU CAN REMOVE
              ANY OR ALL OF THE div className="small-box" from start to end:
               */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./roulette.png" alt="roulette" />
                </div>

                <h1>ROULETTE</h1>
              </div>
              {/* END */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./crash.png" alt="crash" />
                </div>
                <h1>CRASH</h1>
              </div>
              {/* END */}

              {/* START */}
              <div className="small-box">
                <div className="small-img">
                  <img src="./coin.png" alt="coin" />
                </div>
                <h1>COINFLIP</h1>
              </div>
              {/* END */}

              {/* CONTAINER ENDS HERE. PUT ROULETTE, COINFLIP OR CRASH INSIDE 
              THIS CONTAINER, AS YOU SEE ABOVE  */}
            </div>

            <div className="dotcode-btn other-btn">
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
