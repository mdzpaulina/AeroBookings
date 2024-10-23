import './Travels.css'

function Travels({ onClickHome, onClickBook, onClickAccount }) {
    const trips = [
      {
        id: 1,
        origin: 'Mexico City',
        destination: 'New York',
        price: '$350',
        airline: 'Volaris',
        date: '2024-10-25',
        tripType: 'Round-trip',
        status: 'cancelled'
      },
      {
        id: 2,
        origin: 'Los Angeles',
        destination: 'Tokyo',
        price: '$850',
        airline: 'Aeromexico',
        date: '2024-11-10',
        tripType: 'One-way',
        status: 'reserved'
      },
      // Agrega más viajes reservados aquí
    ];
  
    return (
      <div className="deals-page">
        <h1>My Reserved Trips</h1>
        <div className="deals-container">
          {trips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <h3>{trip.origin} ➔ {trip.destination}</h3>
              <p>Price: {trip.price}</p>
              <p>Airline: {trip.airline}</p>
              <p>Date: {trip.date}</p>
              <p>Trip Type: {trip.tripType}</p>
              <span className={`status ${trip.status}`}>{trip.status}</span>
            </div>
          ))}
        </div>
  
        <footer className="footer">
          <button onClick = {onClickHome}>Home</button>
          <button onClick = {onClickBook}>Book</button>
          <button>Deals</button>
          <button onClick = {onClickAccount}>Account</button>
        </footer>
      </div>
    );
}