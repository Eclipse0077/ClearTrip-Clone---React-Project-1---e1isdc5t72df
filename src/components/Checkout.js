import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Checkout() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    country: '',
  });
  
  const getBookingDetails = async () => {
    try {
      const response = await axios.post(
        'https://academics.newtonschool.co/api/v1/bookingportals/booking',
        
      );
      setBookingDetails(response.data);
    } catch (error) {
      console.error('Error fetching booking details:', error);
    }
  };

  useEffect(() => {
    getBookingDetails();
    
  }, []);

  
  return (
    <div className="checkout">
      <h2>Review Your Booking</h2>
      {/* Display booking details and fare summary */}
      <h3>Fare Summary</h3>
      {/* Display fare summary details */}
      
      <h3>User Details</h3>
      <input
        type="text"
        placeholder="Name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Contact Number"
        value={userData.contactNumber}
        onChange={(e) => setUserData({ ...userData, contactNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="Country"
        value={userData.country}
        onChange={(e) => setUserData({ ...userData, country: e.target.value })}
      />

      {/* Display payment methods */}
      <h3>Payment Methods</h3>
      {/* Add payment method options */}
      
      {/* Display address form */}
      <h3>Address</h3>
      {/* Add address form */}

      <button>Pay Now</button>
    </div>
  );
}

export default Checkout;
