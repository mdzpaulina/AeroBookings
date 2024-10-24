import './GetStarted.css'

function GetStarted({ onClick }) {
    return (
      <div className="get-started">
        <div className="get-started-logo">
          <h1>VLSM go</h1>
        </div>
        <div className="bottom-card">
          <h2>Ready to explore beyond boundaries?</h2>
          <button onClick={onClick}>Your Journey Starts Here</button>
        </div>
      </div>
    );
  }

  export default GetStarted;