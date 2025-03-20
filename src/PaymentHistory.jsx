import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./paymentHistory.css"; // Ensure correct CSS file

const PaymentHistory = () => {
  const navigate = useNavigate();
  
  // Simulated logged-in user (Replace with actual authentication logic)
  const loggedInUser = "Parth"; // Example user

  // Simulated transaction history (Replace with API data when backend is ready)
  const allTransactions = [
    { id: 1, user: "Parth", amount: 500, reason: "Food", date: "2025-03-15" },
    { id: 2, user: "Parth", amount: 300, reason: "Travel", date: "2025-03-14" },
    { id: 3, user: "Parth", amount: 200, reason: "Other", date: "2025-03-13" },
    { id: 4, user: "Parth", amount: 150, reason: "Food", date: "2025-03-11" },
    { id: 5, user: "Ayush", amount: 400, reason: "Travel", date: "2025-03-10" }, // Not shown (different user)
  ];

  // Filter transactions for the logged-in user and sort by date (latest first)
  const userTransactions = allTransactions
    .filter((txn) => txn.user === loggedInUser)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="payment-history-container">
      <h2 className="title">My Payment History</h2>

      {/* Transactions List */}
      <div className="history-list">
        {userTransactions.length > 0 ? (
          userTransactions.map((txn) => (
            <div key={txn.id} className="history-item">
              <span className="amount">₹{txn.amount}</span>
              <span className="reason">{txn.reason}</span>
              <span className="date">{txn.date}</span>
            </div>
          ))
        ) : (
          <p className="no-history">No transactions found.</p>
        )}
      </div>

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
};

export default PaymentHistory;
