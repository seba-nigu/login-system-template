import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
