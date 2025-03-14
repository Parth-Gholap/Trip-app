import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Parth from "./PartHome"

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


            </Routes>
        </Router>
    );
}

export default App;
