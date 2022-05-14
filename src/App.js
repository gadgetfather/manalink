import {
  BookmarkPage,
  ExplorePage,
  HomePage,
  LoginPage,
  ProfilePage,
  SignupPage,
} from "./pages";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { useEffect } from "react";
import { useAuth } from "./context/auth-context";
function App() {
  const {
    userInfo: { token },
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (token) {
      if (location.pathname === "/") {
        navigate("/home");
      } else {
        navigate(location.pathname);
      }
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
        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <BookmarkPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <ExplorePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
