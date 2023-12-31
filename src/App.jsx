import { useState } from "react";
import "./App.css";
import "./Responsievness.css";
import "./Dropdown.css";
import InfoPanel from "./InfoPanel";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(true);

  const [isInfoVisibleBox1, setIsInfoVisibleBox1] = useState(false);
  const [isInfoVisibleBox2, setIsInfoVisibleBox2] = useState(false);
  const [isInfoVisibleBox3, setIsInfoVisibleBox3] = useState(false);
  const [isInfoVisibleBox4, setIsInfoVisibleBox4] = useState(false);
  const [isInfoVisibleBox5, setIsInfoVisibleBox5] = useState(false);
  const [isInfoVisibleBox6, setIsInfoVisibleBox6] = useState(false);
  const [isInfoVisibleBox7, setIsInfoVisibleBox7] = useState(false);
  const [isInfoVisibleBox8, setIsInfoVisibleBox8] = useState(false);

  const handleInfoHoverBox1 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox1(true);
  };

  const handleInfoHoverBox2 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox2(true);
  };

  const handleInfoHoverBox3 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox3(true);
  };

  const handleInfoHoverBox4 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox4(true);
  };

  const handleInfoHoverBox5 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox5(true);
  };

  const handleInfoHoverBox6 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox6(true);
  };

  const handleInfoHoverBox7 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox7(true);
  };

  const handleInfoHoverBox8 = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
    setIsInfoVisibleBox8(true);
  };

  // ------------ Boxes end ------------

  const handleInfoHover = () => {
    setIsHovered(true);
    setIsInfoVisible(true);
  };

  const handlePanelHover = () => {
    setIsHovered(true);
  };

  const handlePanelLeave = () => {
    setIsHovered(false);
    setIsInfoVisible(false);
    setIsInfoVisibleBox1(false);
    setIsInfoVisibleBox2(false);
    setIsInfoVisibleBox3(false);
    setIsInfoVisibleBox4(false);
    setIsInfoVisibleBox5(false);
    setIsInfoVisibleBox6(false);
    setIsInfoVisibleBox7(false);
    setIsInfoVisibleBox8(false);
  };

  // -------------------------------------------

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

  let box1 = {
    img: "./empire.svg",
    name: "CSGOEmpire",
    rating: 6.9,
    code: "Jofa",
    bonus: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  let box2 = {
    img: "./roll.svg",
    name: "CSGORoll",
    rating: 8.8,
    code: "Jofa",
    bonus: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  let box3 = {
    img: "./hellcase.svg",
    name: "Hellcase",
    rating: 7.2,
    code: "Jofa",
    bonus: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  let box4 = {
    img: "./daddy3.png",
    name: "DaddySkins",
    rating: 5.8,
    code: "Jofa",
    bonus: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  let box5 = {
    img: "IMAGE PATH",
    name: "PUT NAME HERE",
    rating: "RATING HERE",
    code: "CODE BUTTON HERE",
    bonus: "BONUS HERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  let box6 = {
    img: "IMAGE PATH",
    name: "PUT NAME HERE",
    rating: "RATING HERE",
    code: "CODE BUTTON HERE",
    bonus: "BONUS HERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  let box7 = {
    img: "IMAGE PATH",
    name: "NAME RIGHT",
    rating: "RATING",
    code: "CODE BUTTON HERE",
    bonus: "BONUS HERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  let box8 = {
    img: "IMAGE PATH",
    name: "PUT NAME HERE",
    rating: "RATING HERE",
    code: "CODE BUTTON HERE",
    bonus: "BONUS HERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. ",
  };

  return (
    <div className="app">
      <div className="panels-info">
        {isInfoVisibleBox1 && (
          <div className="infopanel">
            <InfoPanel
              onMouseEnter={handlePanelHover}
              onMouseLeave={handlePanelLeave}
              onClose={() => setIsInfoVisibleBox1(false)}
              data={box1}
            />
          </div>
        )}

        {isInfoVisibleBox2 && (
          <div className="infopanel">
            <InfoPanel
              onMouseEnter={handlePanelHover}
              onMouseLeave={handlePanelLeave}
              onClose={() => setIsInfoVisibleBox2(false)}
              data={box2}
            />
          </div>
        )}

        {isInfoVisibleBox3 && (
          <div className="infopanel">
            <InfoPanel
              onMouseEnter={handlePanelHover}
              onMouseLeave={handlePanelLeave}
              onClose={() => setIsInfoVisibleBox3(false)}
              data={box3}
            />
          </div>
        )}

        {isInfoVisibleBox4 && (
          <div className="infopanel">
            <InfoPanel
              onMouseEnter={handlePanelHover}
              onMouseLeave={handlePanelLeave}
              onClose={() => setIsInfoVisibleBox4(false)}
              data={box4}
            />
          </div>
        )}
      </div>

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
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ 0.50</p>
              </div>
            </div>

            <div className="right-title">
              <div className="box-title">
                <p>CSGOEMPIRE</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox1}
                />
              </div>
            </div>

            <div className="first-rectangle">
              <img className="roll-logo" src="./empire.svg" alt="roll" />
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
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ 0.50</p>
              </div>
            </div>

            <div className="right-title">
              <div className="box-title">
                <p>CSGOROLL</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox2}
                />
              </div>
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
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ 0.50</p>
              </div>
            </div>

            <div className="right-title">
              <div className="box-title">
                <p>HELLCASE</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox3}
                />
              </div>
            </div>

            <div className="first-rectangle">
              <img className="roll-logo" src="./hellcase.svg" alt="roll" />
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
        {filteredBoxes("DADDYSKINS") && (
          <div className="box">
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ 0.50</p>
              </div>
            </div>

            <div className="right-title">
              <div className="box-title">
                <p>DADDYSKINS</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox4}
                />
              </div>
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
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <div className="box-title">
                <p>PUT NAME HERE</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox5}
                />
              </div>
            </div>

            <div className="other-panels">
              {isInfoVisibleBox5 && (
                <div className="infopanel">
                  <InfoPanel
                    onMouseEnter={handlePanelHover}
                    onMouseLeave={handlePanelLeave}
                    onClose={() => setIsInfoVisibleBox5(false)}
                    data={box5}
                  />
                </div>
              )}

              {isInfoVisibleBox6 && (
                <div className="infopanel">
                  <InfoPanel
                    onMouseEnter={handlePanelHover}
                    onMouseLeave={handlePanelLeave}
                    onClose={() => setIsInfoVisibleBox6(false)}
                    data={box6}
                  />
                </div>
              )}

              {isInfoVisibleBox7 && (
                <div className="infopanel">
                  <InfoPanel
                    onMouseEnter={handlePanelHover}
                    onMouseLeave={handlePanelLeave}
                    onClose={() => setIsInfoVisibleBox7(false)}
                    data={box7}
                  />
                </div>
              )}

              {isInfoVisibleBox8 && (
                <div className="infopanel">
                  <InfoPanel
                    onMouseEnter={handlePanelHover}
                    onMouseLeave={handlePanelLeave}
                    onClose={() => setIsInfoVisibleBox8(false)}
                    data={box8}
                  />
                </div>
              )}
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
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <div className="box-title">
                <p>PUT NAME HERE</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox6}
                />
              </div>
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
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <div className="box-title">
                <p>PUT NAME HERE</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox7}
                />
              </div>
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
            <div className="rectangle-container">
              <div className="rectangle">
                <p>$ COST</p> {/*CHANGE PANEL PRICE HERE INSIDE <p> <p/> tags*/}
              </div>
            </div>

            <div className="right-title">
              {/* CHANGE PANEL NAME HERE INSIDE <p> <p/> tags - (this is the name on the right top-side of panel)*/}
              <div className="box-title">
                <p>PUT NAME HERE</p>
              </div>

              <div className="info-div">
                <img
                  className="info-img"
                  src="./info.png"
                  alt=""
                  onMouseEnter={handleInfoHoverBox8}
                />
              </div>
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
