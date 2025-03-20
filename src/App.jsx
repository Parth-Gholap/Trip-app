import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./home";
import Parth from "./PartHome";
import Payment from "./payment";
import PaymentHistory from "./PaymentHistory"; // Import Payment History component

function App() {
    return (
        <Router>
            <Routes>
                {/* Default route should be Login */}
                <Route path="/" element={<Login />} />
                
                {/* Protected Routes */}
                <Route path="/home" element={<Home />} />
                <Route path="/PartHome" element={<Parth />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/payment-history" element={<PaymentHistory />} /> {/* Added route */}

                {/* Redirect unknown routes to login */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
