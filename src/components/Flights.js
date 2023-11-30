import React, { useState } from 'react';
import axios from 'axios';

function Flights() {
  const [flights, setFlights] = useState([]);

  // Function to fetch flights
  const searchFlights = async (source, destination) => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${source}","destination":"${destination}"}`
      );
      setFlights(response.data);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  return (
    <div className="flights">
      {/* Flights content here */}
    </div>
  );
}

export default Flights;
