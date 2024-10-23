import logo from './assets/logo.png'
import './Book.css'

function Book({ onClickHome, onClickTravels, onClickAccount }) {
  return (
    <div className="orders-page">
      <div className="orders-container">
        <img src={logo} alt="Logo" />
        <div className="orders-title">
          <h2>Book Here</h2>
        </div>

        <div className="orders-input">
          <p>Origin</p>
          <input type="text" placeholder="Where from?" />
        </div>

        <div className="orders-input">
          <p>Destination</p>
          <input type="text" placeholder="Where to?" />
        </div>

        <div className="orders-input">
          <p>Maximum Price</p>
          <input type="number" placeholder="Your price limit" />
        </div>

        <div className="orders-input">
          <p>Preferred Airline</p>
          <select>
            <option value="volaris">Volaris</option>
            <option value="aeromexico">Aeromexico</option>
            <option value="vivaerobus">VivaAerobus</option>
          </select>
        </div>

        <div className="orders-input">
          <p>Type of Trip</p>
          <select>
            <option value="one-way">One-way</option>
            <option value="round-trip">Round-trip</option>
          </select>
        </div>

        <div className="orders-input">
          <p>Travel Date</p>
          <input type="date" />
        </div>

        <button className="submit-order">Search Flights</button>
      </div>

      <footer className="footer">
        <button onClick={onClickHome}>Home</button>
        <button>Book</button>
        <button onClick={onClickTravels}>Travels</button>
        <button onClick={onClickAccount}>Account</button>
      </footer>
    </div>
  );
}

export default Book;