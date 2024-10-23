import { useState, useEffect } from 'react'
import SplashScreen from './SplashScreen.jsx'
import GetStarted from './GetStarted.jsx'
import SignIn from './SignIn.jsx'
import HomePage from './HomePage.jsx'
import Book from './Book.jsx'
import './App.css';

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 3000); 
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => setStep(2);
  const handleLogin = () => setStep(3);
  const handleHome = () => setStep(3);
  const handleBook = () => setStep(4);


  return (
    <>
      {step === 0 && <SplashScreen />}
      {step === 1 && <GetStarted onClick={handleGetStarted} />}
      {step === 2 && <SignIn onLogin={handleLogin} />}
      {step === 3 && <HomePage onClickOrders={handleOrders} onClickDeals={handleDeals} onClickAccount={handleAccount} />}
      {step === 4 && <Book onClickHome={handleHome} onClickDeals={handleDeals} onClickAccount={handleAccount}/>}
    </>
  );
}

export default App