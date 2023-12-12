import "./App.css";

function App() {
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
        <div className="popular">Popular</div>
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
