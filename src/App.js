import {
  BookmarkPage,
  ExplorePage,
  HomePage,
  LoginPage,
  ProfilePage,
  SignupPage,
  SinglePostPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PostModal } from "./components";
import { useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <div>
      {isOpen && <PostModal />}
      {}
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
          path="/:profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <ProtectedRoute>
              <SinglePostPage />
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
