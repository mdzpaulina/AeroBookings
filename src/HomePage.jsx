import pulau from './assets/pulau.jpeg'
import bromo from './assets/bromo.jpg'
import avatar from './assets/avatar.jpeg'
import labuan from './assets/labuan.jpeg'
import './HomePage.css'

function HomePage() {
    return (
      <div className="home-page">
        <header className="header">
          <div className="user-info">
            <h2>Hi, @User</h2>
            <img src={avatar} alt="User Avatar" className="avatar"/>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Where to go?" />
            <button>Search</button>
          </div>
        </header>
  
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
            <div className="card">
              <img src={bromo} alt="Mount Bromo" />
              <h4>Mount Bromo</h4>
              <p>Volcano in East Java</p>
              <p>★ 4.9</p>
              <p>Start from $150/pax</p>
              <button>3D2N</button>
            </div>
          <div className="card">
            <img src={pulau} alt="Labengki Sombori" />
            <h4>Labengki Sombori</h4>
            <p>Islands in Sulawesi</p>
            <p>★ 4.8</p>
            <p>Start from $250/pax</p>
            <button>3D2N</button>
          </div>
          <div className="card">
            <img src={labuan} alt="Sailing Komodo" />
            <h4>Sailing Komodo</h4>
            <p>Labuan Bajo</p>
            <p>★ 4.8</p>
            <p>Start from $200/pax</p>
            <button>3D2N</button>
          </div>
          </div>
          </div>
        </section>
  
        <footer className="footer">
          <button>Home</button>
          <button>Orders</button>
          <button>Deals</button>
          <button>Account</button>
        </footer>
      </div>
    );
  }

  export default HomePage;