import React, { useState } from 'react';
import axios from 'axios';

function Hotels() {
  const [hotels, setHotels] = useState([]);

  const searchHotels = async (location) => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}`
      );
      setHotels(response.data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  return (
    <div className="hotels">
      <h2>Search Hotels</h2>
      {/* Search form for hotels */}
      <button onClick={() => searchHotels('Mumbai')}>Search Hotels in Mumbai</button>

      {/* List of hotels */}
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>{hotel.location}</p>
          {/* Add more  */}
        </div>
      ))}
    </div>
  );
}

export default Hotels;
