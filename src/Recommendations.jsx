
import React, { useState } from 'react';
import bromo from './assets/bromo.jpg';
import paris from './assets/paris.jpg';
import cancun from './assets/cancun.jpg';
import alaska from './assets/alaska.jpg';
import pulau from './assets/pulau.jpeg';
import labuan from './assets/labuan.jpeg';

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
  {
    id: 4,
    destination: "Paris",
    imgSrc: paris,
    description: "Eiffel Tower",
    rating: 4.5,
    price: 270,
  },
  {
    id: 5,
    destination: "Cancun",
    imgSrc: cancun,
    description: "Playa Delfines",
    rating: 3.9,
    price: 170,
  },
  {
    id: 6,
    destination: "Alaska",
    imgSrc: alaska,
    description: "Northern Lights",
    rating: 3.9,
    price: 170,
  },
];

const Recommendations = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const [ratingFilter, setRatingFilter] = useState('all');

  // Filter recommendations based on the price range and rating
  const filteredRecommendations = recommendations.filter((item) => {
    const isPriceInRange = item.price >= minPrice && item.price <= maxPrice;

    const isRatingValid = ratingFilter === 'all' ||
      (ratingFilter === 'high' && item.rating >= 4.8) ||
      (ratingFilter === 'medium' && item.rating >= 4.5 && item.rating < 4.8) ||
      (ratingFilter === 'low' && item.rating < 4.5);

    return isPriceInRange && isRatingValid;
  });

  // Handle price range selection
  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === 'all') {
      setMinPrice(0);
      setMaxPrice(300);
    } else if (value === 'low') {
      setMinPrice(0);
      setMaxPrice(150);
    } else if (value === 'medium') {
      setMinPrice(151);
      setMaxPrice(250);
    } else if (value === 'high') {
      setMinPrice(251);
      setMaxPrice(300);
    }
  };

  // Handle rating filter selection
  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  // Scroll to left or right
  const scrollTo = (direction) => {
    const scrollAmount = direction === 'left' ? -200 : 200; // Adjust the scroll amount as needed
    document.querySelector('.carousel').scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="recommendations">
      <div className="carousel-container">
        <h3>Journey together</h3>
        
        <div className="filters" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
          <label className="filter-label" style={{ fontSize: '1rem', color: '#333', marginRight: '15px' }}>
            Price Range:
            <select 
              onChange={handlePriceChange} 
              className="filter-select" 
              style={{ 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                fontSize: '1rem', 
                transition: 'border-color 0.3s, box-shadow 0.3s' 
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
            >
              <option value="all">All</option>
              <option value="high">4.8 and above</option>
              <option value="medium">4.5 to 4.8</option>
              <option value="low">Below 4.5</option>
            </select>
          </label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => scrollTo('left')} style={{ marginRight: '10px' }}>←</button>
          
          <div className="carousel" style={{ display: 'flex', overflowX: 'auto', padding: '10px', scrollSnapType: 'x mandatory' }}>
            {filteredRecommendations.map((item) => (
              <div className="card" key={item.id} style={{ flex: '0 0 auto', width: '200px', margin: '0 10px', scrollSnapAlign: 'start', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                <img src={item.imgSrc} alt={item.destination} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <h4>{item.destination}</h4>
                <p>{item.description}</p>
                <p>★ {item.rating}</p>
                <p>Start from ${item.price}/pax</p>
                <button>3D2N</button>
              </div>
            ))}
          </div>

          <button onClick={() => scrollTo('right')} style={{ marginLeft: '10px' }}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
