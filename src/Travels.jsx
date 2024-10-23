import React, { useState } from 'react';
import './Travels.css';

function Travels({ onClickHome, onClickBook, onClickAccount }) {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const orders = {
    upcoming: [
      {
        id: 1,
        origin: 'Mexico City',
        destination: 'New York',
        price: '$500',
        airline: 'American Airlines',
        date: '2024-12-01',
        tripType: 'Round-trip',
        status: 'reserved',
      },
      {
        id: 2,
        origin: 'Paris',
        destination: 'Los Angeles',
        price: '$700',
        airline: 'Air France',
        date: '2025-01-15',
        tripType: 'One-way',
        status: 'reserved',
      },
    ],
    past: [
      {
        id: 3,
        origin: 'Tokyo',
        destination: 'San Francisco',
        price: '$1200',
        airline: 'ANA',
        date: '2023-06-25',
        tripType: 'Round-trip',
        status: 'completed',
      },
      {
        id: 4,
        origin: 'Madrid',
        destination: 'London',
        price: '$450',
        airline: 'Iberia',
        date: '2023-09-10',
        tripType: 'One-way',
        status: 'completed',
      },
      {
        id: 5,
        origin: 'India',
        destination: 'Rusia',
        price: '$1450',
        airline: 'Iberia',
        date: '2020-07-11',
        tripType: 'Round-trip',
        status: 'completed',
      }
    ],
  };

  return (
    <div className="travels-page">
      <h1 >My Trips</h1>

      {/* Tabs for Upcoming and Past Trips */}
      <div className="tabs">
        <button
          className={selectedTab === 'upcoming' ? 'active' : ''}
          onClick={() => setSelectedTab('upcoming')}
        >
          Upcoming Trips
        </button>
        <button
          className={selectedTab === 'past' ? 'active' : ''}
          onClick={() => setSelectedTab('past')}
        >
          Past Trips
        </button>
      </div>

      {/* Upcoming Trips Section */}
      {selectedTab === 'upcoming' && (
        <div className="travels-section">
          <h2>Upcoming Trips</h2>
          {orders.upcoming.length > 0 ? (
            <div className="travels-container">
              {orders.upcoming.map((order) => (
                <div key={order.id} className={`trip-card ${order.status}`}>
                  <h3>
                    {order.origin} ➔ {order.destination}
                  </h3>
                  <p>Price: {order.price}</p>
                  <p>Airline: {order.airline}</p>
                  <p>Date: {order.date}</p>
                  <p>Trip Type: {order.tripType}</p>
                  <span className={`status ${order.status}`}>{order.status}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-travels-message">No tienes vuelos próximos.</p>
          )}
        </div>
      )}

      {/* Past Trips Section */}
      {selectedTab === 'past' && (
        <div className="travels-section">
          <h2>Past Trips</h2>
          {orders.past.length > 0 ? (
            <div className="travels-container">
              {orders.past.map((order) => (
                <div key={order.id} className={`trip-card ${order.status}`}>
                  <h3>
                    {order.origin} ➔ {order.destination}
                  </h3>
                  <p>Price: {order.price}</p>
                  <p>Airline: {order.airline}</p>
                  <p>Date: {order.date}</p>
                  <p>Trip Type: {order.tripType}</p>
                  <span className={`status ${order.status}`}>{order.status}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-travels-message">No tienes vuelos pasados.</p>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <button onClick={onClickHome}>Home</button>
        <button onClick={onClickBook}>Book</button>
        <button>Travels</button>
        <button onClick={onClickAccount}>Account</button>
      </footer>
    </div>
  );
}

export default Travels;