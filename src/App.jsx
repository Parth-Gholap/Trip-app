import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./home";
import Parth from "./PartHome"
import Payment from "./payment";
import Settlement from "./Settlement";
import History from "./PaymentHistory"

function App() {
    return (
        <Router>
            <Routes>
                {/* Default route should be Login */}
                <Route path="/" element={<Login />} />
                
                {/* Protected Routes */}
                <Route path="/home" element={<Home />} />

                <Route path="/PartHome" element={<Parth />} />

                {/* Redirect unknown routes to login */}
                <Route path="*" element={<Navigate to="/login" />} />

                <Route path="/payment" element={<Payment />} />

                <Route path="/Settlement" element={<Settlement />} />

                <Route path="/PaymentHistory" element={<History />} />
            </Routes>
        </Router>
    );
}

export default App;
