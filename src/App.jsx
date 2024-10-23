import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './App.css';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <h1>VGML go</h1>
      <p>Easy book, Easy go!</p>
      <img src="./logo.png" alt="Logo" />
    </div>
  );
}

function GetStarted({ onClick }) {
  return (
    <div className="get-started">
      <h1>VGML go</h1>
      <button onClick={onClick}>Your Journey Starts Here</button>
    </div>
  );
}

function SignIn({ onLogin }) {
  return (
    <div className="sign-in">
      <form>
        <h2>Let’s <span className="highlight">Travel</span> you in.</h2>
        <h4>Discover the World with Every Sign In</h4>
        <input type="email" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
        <a href="#" className="forgot-password">Forgot password?</a>
        <button type="button" onClick={onLogin}>Sign In</button>
        <div className="alternative-sign-in">
          <p>or sign in with</p>
          <div className="sign-in-options">
            <button className="google-sign-in">Google</button>
            <button className="apple-sign-in">Apple</button>
            <button className="facebook-sign-in">Facebook</button>
          </div>
        </div>
        <p className="no-account">I don't have an account?</p>
        <button className="sign-up">Sign Up</button>
      </form>
    </div>
  );
}


function HomePage() {
  return (
    <div className="home-page">
      <h2>Hi, User</h2>
      <div className="search-bar">
        <input type="text" placeholder="Where to go?" />
        <button>Search</button>
      </div>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 3000); // 3s splash
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => setStep(2);
  const handleLogin = () => setStep(3);

  return (
    <>
      {step === 0 && <SplashScreen />}
      {step === 1 && <GetStarted onClick={handleGetStarted} />}
      {step === 2 && <SignIn onLogin={handleLogin} />}
      {step === 3 && <HomePage />}
    </>
  );
}

export default App
