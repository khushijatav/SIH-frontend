import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import StudentLogin from "./Pages/StudentLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Student Login Page */}
        <Route path="/login" element={<StudentLogin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;