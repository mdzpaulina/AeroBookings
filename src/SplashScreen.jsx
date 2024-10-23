import logo from './assets/vgml.jpg'
import './SplashScreen.css'

function SplashScreen() {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Logo" />
        <h1>VLSM go!</h1>
        <p>Easy book, Easy go!</p>
      </div>
    );
  }

  export default SplashScreen;