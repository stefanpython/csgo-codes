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

      <div className="two-btn-container">
        <button>GIVEAWAYS</button>
        <button>STEAM GROUP</button>
      </div>

      <div className="mid-container">
        <hr className="left" />
        <div className="featured">FEATURED</div>
        <hr className="right" />
      </div>

      <div className="box-container">
        <div className="box">one</div>

        <div className="box">two</div>

        <div className="box">three</div>

        <div className="box">four</div>
      </div>
    </div>
  );
}

export default App;
