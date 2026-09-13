import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import StudentLogin from "./Pages/StudentLogin";
import CollegeAdminLogin from "./Pages/CollegeAdminLogin";
import IndustryLogin from "./Pages/IndustryLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Student Login Page */}
        <Route path="/login" element={<StudentLogin />} />

        {/* College Admin Login Page */}
        
        <Route
          path="/college-admin-login"
          element={<CollegeAdminLogin />}
        />

        {/* Industry Login Page */}
        <Route path="/industry-login" element={<IndustryLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;