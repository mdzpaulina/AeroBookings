import { useState, useEffect } from 'react'
import logo from './assets/vgml.jpg'
import pulau from './assets/pulau.jpeg'
import bromo from './assets/bromo.jpg'
import avatar from './assets/avatar.jpeg'
import labuan from './assets/labuan.jpeg'
import './App.css';


function FlightList({ flights, destination, onClose }) {
  return (
    <div className="flight-list">
      <h3>Available Flights to {destination}</h3>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <strong>{flight.airline}</strong> - {flight.time} - ${flight.price}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}


function SplashScreen() {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" />
      <h1>VGML go</h1>
      <p>Easy book, Easy go!</p>
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
        <p className="no-account">Don't have an account?</p>
        <button className="sign-up">Sign Up</button>
      </form>
    </div>
  );
}


function HomePage() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [priceRange, setPriceRange] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

  const handleCardClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handleClose = () => {
    setSelectedDestination(null);
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const flights = {
    "Mount Bromo": [
      { id: 1, airline: "Sentosa Air", time: "10:00 AM", price: 150 },
      { id: 2, airline: "Garuda Indonesia", time: "12:00 PM", price: 180 }
    ],
    "Labengki Sombori": [
      { id: 3, airline: "Sulawesi Airways", time: "09:00 AM", price: 250 },
      { id: 4, airline: "Sky Travel", time: "03:00 PM", price: 275 }
    ],
    "Sailing Komodo": [
      { id: 5, airline: "Oceanic Air", time: "08:00 AM", price: 200 },
      { id: 6, airline: "Bajo Express", time: "02:30 PM", price: 225 }
    ]
  };

  const recommendations = [
    {
      id: 1,
      destination: "Mount Bromo",
      imgSrc: bromo,
      description: "Volcano in East Java",
      rating: 4.9,
      price: 150,
    },
    {
      id: 2,
      destination: "Labengki Sombori",
      imgSrc: pulau,
      description: "Islands in Sulawesi",
      rating: 4.8,
      price: 250,
    },
    {
      id: 3,
      destination: "Sailing Komodo",
      imgSrc: labuan,
      description: "Labuan Bajo",
      rating: 4.8,
      price: 200,
    },
  ];
  
  const filterRecommendations = () => {
    return recommendations.filter((item) => {
      let priceCheck =
        priceRange === "all" ||
        (priceRange === "low" && item.price <= 150) ||
        (priceRange === "medium" && item.price > 150 && item.price <= 250) ||
        (priceRange === "high" && item.price > 250);

      let ratingCheck =
        ratingFilter === "all" ||
        (ratingFilter === "high" && item.rating >= 4.8) ||
        (ratingFilter === "medium" && item.rating >= 4.5 && item.rating < 4.8) ||
        (ratingFilter === "low" && item.rating < 4.5);

      return priceCheck && ratingCheck;
    });
  };
  const filteredRecommendations = filterRecommendations();
  return (
    <div className="home-page">
      <header className="header">
        <div className="user-info">
          <h2>Hi, @User</h2>
          <img src={avatar} alt="User Avatar" className="avatar" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Where to go?" />
          <button>Search</button>
        </div>
      </header>

      <div className="filters" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
  <label className="filter-label" style={{ fontSize: '1rem', color: '#333', marginRight: '15px' }}>
    Price Range:
    <select 
      value={priceRange} 
      onChange={handlePriceChange} 
      className="filter-select" 
      style={{ 
        padding: '10px', 
        border: '1px solid #ccc', 
        borderRadius: '5px', 
        fontSize: '1rem', 
        transition: 'border-color 0.3s, box-shadow 0.3s' 
      }}
      onFocus={(e) => {
        e.target.style.borderColor = '#007bff'; 
        e.target.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)'; 
      }}
      onBlur={(e) => {
        e.target.style.borderColor = '#ccc';
        e.target.style.boxShadow = 'none'; 
      }}
    >
      <option value="all">All</option>
      <option value="low">Up to $150</option>
      <option value="medium">$151 - $250</option>
      <option value="high">Above $250</option>
    </select>
  </label>
  <label className="filter-label" style={{ fontSize: '1rem', color: '#333', marginRight: '15px' }}>
    Rating:
    <select 
      value={ratingFilter} 
      onChange={handleRatingChange} 
      className="filter-select" 
      style={{ 
        padding: '10px', 
        border: '1px solid #ccc', 
        borderRadius: '5px', 
        fontSize: '1rem', 
        transition: 'border-color 0.3s, box-shadow 0.3s' 
      }}
      onFocus={(e) => {
        e.target.style.borderColor = '#007bff'; 
        e.target.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)'; 
      }}
      onBlur={(e) => {
        e.target.style.borderColor = '#ccc'; 
        e.target.style.boxShadow = 'none'; 
      }}
    >
      <option value="all">All</option>
      <option value="high">4.8 and above</option>
      <option value="medium">4.5 to 4.8</option>
      <option value="low">Below 4.5</option>
    </select>
  </label>
</div>



      <div className="flight-card">
        <div className="flight-header">
          <span className="badge">Upcoming</span>
          <span className="flight-date">24 March 2024</span>
        </div>

        <div className="flight-details">
          <div className="flight-location">
            <strong>CGK</strong>
            <p>05:30</p>
            <i className="fas fa-plane-departure flight-icon"></i>
          </div>

          <div className="flight-duration">
            <p>1h 30m</p>
            <hr />
          </div>

          <div className="flight-location">
            <strong>DPS</strong>
            <p>06:30</p>
            <i className="fas fa-plane-arrival flight-icon"></i>
          </div>
        </div>

        <div className="flight-info">
          <p>Sentosa Air • Economy • Direct</p>
        </div>

        <div className="booking-info">
          <span>Booking ID</span>
          <strong>ZEEBAW</strong>
        </div>
      </div>

      <section className="recommendations">
        <div className="carousel-container">
          <h3>Journey together</h3>
          <div className="carousel">
            {filterRecommendations().map((item) => (
              <div className="card" key={item.id} onClick={() => handleCardClick(item.destination)}>
                <img src={item.imgSrc} alt={item.destination} />
                <h4>{item.destination}</h4>
                <p>{item.description}</p>
                <p>★ {item.rating}</p>
                <p>Start from ${item.price}/pax</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedDestination && (
        <FlightList
          flights={flights[selectedDestination] || []}
          destination={selectedDestination}
          onClose={handleClose}
        />
      )}

      <footer className="footer">
        <button>Home</button>
        <button>Orders</button>
        <button>Deals</button>
        <button>Account</button>
      </footer>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 3000); 
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