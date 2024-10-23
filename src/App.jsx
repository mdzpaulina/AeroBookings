import { useState, useEffect } from 'react'
import SplashScreen from './SplashScreen.jsx'
import GetStarted from './GetStarted.jsx'
import SignIn from './SignIn.jsx'
import HomePage from './HomePage.jsx'
import AdminPage from './AdminPage.jsx'
import Book from './Book.jsx'
import Travels from './Travels.jsx'
import Account from './Account.jsx'
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => setStep(2);

  const handleLogin = (userRole) => {
    setRole(userRole);
    setStep(3);
  }

  const handleHome = () => setStep(3);
  const handleBook = () => setStep(4);
  const handleTravels = () => setStep(5);
  const handleAccount = () => setStep(6);

  return (
    <>
      {step === 0 && <SplashScreen />}
      {step === 1 && <GetStarted onClick={handleGetStarted} />}
      {step === 2 && <SignIn onLogin={handleLogin} />}
      {step === 3 && (
        role === 'admin' ? (
          <AdminPage />
        ) : (
          <HomePage onClickBook={handleBook} onClickTravels={handleTravels} onClickAccount={handleAccount} />

        )
      )}
      {step === 4 && <Book onClickHome={handleHome} onClickTravels={handleTravels} onClickAccount={handleAccount} />}
      {step === 5 && <Travels onClickHome={handleHome} onClickBook={handleBook} onClickAccount={handleAccount} />}
      {step === 6 && <Account onClickHome={handleHome} onClickBook={handleBook} onClickTravels={handleTravels} />}

    </>
  );
}

export default App;