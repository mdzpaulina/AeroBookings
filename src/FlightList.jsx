import React from 'react';

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

export default FlightList;