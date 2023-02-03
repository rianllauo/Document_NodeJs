import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
