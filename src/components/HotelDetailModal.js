import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HotelDetailsModal({ hotelId, onClose }) {
  const [hotelDetails, setHotelDetails] = useState(null);

  const getHotelDetails = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelId}`
      );
      setHotelDetails(response.data);
    } catch (error) {
      console.error('Error fetching hotel details:', error);
    }
  };

  useEffect(() => {
    if (hotelId) {
      getHotelDetails();
    }
  }, [hotelId]);

  return (
    <div className="hotel-details-modal">
      {hotelDetails && (
        <>
          <h2>{hotelDetails.name}</h2>
          <p>{hotelDetails.description}</p>
          {/* Add more hotel details as needed */}
          <button onClick={onClose}>Close</button>
        </>
      )}
    </div>
  );
}

export default HotelDetailsModal;
