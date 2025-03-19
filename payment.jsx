import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import "./payment.css"; // Ensure this CSS file is correctly linked

const Payment = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [reason, setReason] = useState("");
    const [customReason, setCustomReason] = useState("");
    const [errors, setErrors] = useState({});
    const [involved, setInvolved] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const navigate = useNavigate();

    const names = ["Parth", "Ayush", "Pratik", "Om", "Sparsh"];
    const reasons = ["Food", "Travel", "Other"];

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setInvolved((prev) =>
            checked ? [...prev, value] : prev.filter((name) => name !== value)
        );
    };

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        setInvolved(checked ? [...names, "Abhinav"] : []);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!name) newErrors.name = "*Please select a name";
        if (!amount) {
            newErrors.amount = "*Please enter the amount";
        } else if (parseFloat(amount) <= 0) {
            newErrors.amount = "*Please enter a valid amount";
        }
        if (reason === "Other" && !customReason) newErrors.reason = "*Please provide a reason";
        if (involved.length === 0) newErrors.involved = "*Please select at least one person";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        const finalReason = reason === "Other" ? customReason : reason;
        console.log("Payment Added:", { name, amount, reason: finalReason, involved });
    };

    return (
        <div className="payment-container" style={{ userSelect: "none" }}>
            <h2>Add Payment</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Name:</label>
                    <select value={name} onChange={(e) => setName(e.target.value)}>
                        <option value="" disabled>Select Name</option>
                        {[...names, "Abhinav"].map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                
                <div className="input-group">
                    <label>Amount:</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter amount" 
                        style={{ userSelect: "auto" }}
                    />
                    {errors.amount && <p className="error-message">{errors.amount}</p>}
                </div>

                <div className="input-group">
                    <label>Reason:</label>
                    <select value={reason} onChange={(e) => setReason(e.target.value)}>
                        <option value="" disabled>Select Reason</option>
                        {reasons.map((r) => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                    {reason === "Other" && (
                        <input 
                            type="text" 
                            value={customReason} 
                            onChange={(e) => setCustomReason(e.target.value)} 
                            placeholder="Enter reason" 
                        />
                    )}
                    {errors.reason && <p className="error-message">{errors.reason}</p>}
                </div>

                <div className="input-group">
                    <label>Who was involved?</label>
                    <div className="checkbox-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                        {names.map((n) => (
                            <div key={n} className="checkbox-item" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <input 
                                    type="checkbox" 
                                    value={n} 
                                    onChange={handleCheckboxChange} 
                                    checked={involved.includes(n)}
                                />
                                <span>{n}</span>
                            </div>
                        ))}
                        <div className="checkbox-item" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <input 
                                type="checkbox" 
                                value="Abhinav" 
                                onChange={handleCheckboxChange} 
                                checked={involved.includes("Abhinav")}
                            />
                            <span>Abhinav</span>
                        </div>
                        <div className="checkbox-item" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <input 
                                type="checkbox" 
                                onChange={handleSelectAll} 
                                checked={selectAll}
                            />
                            <span>Select All</span>
                        </div>
                    </div>
                    {errors.involved && <p className="error-message">{errors.involved}</p>}
                </div>

                <button type="submit" className="submit-btn"> Add Payment</button>
                <button type="button" className="back-btn" onClick={() => navigate("/PartHome")}> Back</button>
            </form>
        </div>
    );
};

export default Payment;