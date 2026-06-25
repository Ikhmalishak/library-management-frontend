import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/login'
import Dashboard from './pages/dashboard'

// Guard for authenticated pages
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
}

// Guard for login page (prevent accessing login if already logged in)
function PublicRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
