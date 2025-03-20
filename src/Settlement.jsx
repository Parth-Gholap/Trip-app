import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import "./settlement.css"; // Ensure correct linking

const Settlement = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Example: Assume user is stored in localStorage or fetched from API
  const loggedInUser = localStorage.getItem("username") || "Parth"; // Replace with actual authentication logic

  // Example settlement data (Replace with API data)
  const settlements = [
    { name: "Parth", amount: 500 },
    { name: "Ayush", amount: 300 },
    { name: "Pratik", amount: 200 },
    { name: "Om", amount: 450 },
    { name: "Sparsh", amount: 150 },
    { name: "Abhinav", amount: 600 },
  ];

  // **Filter out the logged-in user from settlements**
  const filteredSettlements = settlements.filter(
    (person) => person.name !== loggedInUser
  );

  return (
    <div className="settlement-container">
      <h2 className="title">Settle Payments</h2>

      {/* Payment List */}
      <div className="settlement-list">
        {filteredSettlements.length > 0 ? (
          filteredSettlements.map((person, index) => (
            <div key={index} className="settlement-item">
              <span className="name">{person.name}</span>
              <span className="amount">₹{person.amount}</span>
            </div>
          ))
        ) : (
          <p className="no-payments">No payments to settle 🎉</p>
        )}
      </div>

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
};

export default Settlement;
