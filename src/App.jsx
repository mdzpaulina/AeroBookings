import { useState, useEffect } from 'react'
import SplashScreen from './SplashScreen.jsx'
import GetStarted from './GetStarted.jsx'
import SignIn from './SignIn.jsx'
import HomePage from './HomePage.jsx'
import AdminPage from './AdminPage.jsx'
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 3000); 
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => setStep(2);

  const handleLogin = (userRole) => {
    setRole(userRole);
    setStep(3);
  }

  const handleHome = () => setStep(3);

  const handleOrders = () => {
    console.log('orders click')
  }

  const handleDeals = () => {
    console.log('deals click')
  }
  const handleAccount = () => {
    console.log('account click')
  }

  return (
    <>
      {step === 0 && <SplashScreen />}
      {step === 1 && <GetStarted onClick={handleGetStarted} />}
      {step === 2 && <SignIn onLogin={handleLogin} />}
      {step === 3 && (
        role === 'admin' ? (
          <AdminPage />
        ) : (
          <HomePage onClickOrders={handleOrders} onClickDeals={handleDeals} onClickAccount={handleAccount} />
        )
      )}
    </>
  );
}

export default App;