import { HomePage, LoginPage, SignupPage } from "./pages";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { useEffect } from "react";
import { useAuth } from "./context/auth-context";
function App() {
  const {
    userInfo: { token },
  } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
