import React from "react";
import "./PaymentHistory.css";

const PaymentHistory = () => {
    const transactions = [
        { id: 1, name: "John Doe", amount: 500, reason: "Food", date: "2025-03-18" },
        { id: 2, name: "Jane Smith", amount: 200, reason: "Snacks", date: "2025-03-19" },
        { id: 3, name: "John Doe", amount: 1200, reason: "Shopping", date: "2025-03-20" },
        { id: 4, name: "Jane Smith", amount: 750, reason: "Transport", date: "2025-03-21" },
        { id: 5, name: "John Doe", amount: 1800, reason: "Hotel Stay", date: "2025-03-22" },
        { id: 6, name: "Jane Smith", amount: 300, reason: "Cafe", date: "2025-03-23" },
        { id: 7, name: "John Doe", amount: 950, reason: "Electronics", date: "2025-03-24" },
        { id: 8, name: "Jane Smith", amount: 450, reason: "Movie", date: "2025-03-25" },
    ];

    return (
        <div className="payment-history-container">
            <h2 className="payment-history-title">Payment History</h2>
            <div className="history-list">
                {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <div key={transaction.id} className="history-item">
                            <div className="history-box">
                                <span className="amount">₹{transaction.amount}</span>
                                <span className="reason">{transaction.reason}</span>
                                <span className="date">{transaction.date}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No payments found.</p>
                )}
            </div>
        </div>
    );
};

export default PaymentHistory;