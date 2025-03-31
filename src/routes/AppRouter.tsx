import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
