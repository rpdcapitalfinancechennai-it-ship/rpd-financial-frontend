import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Service from './pages/Service';
import FixedDeposit from './pages/FixedDeposit';
import Loan from './pages/Loan';
import Chit from './pages/Chit';
import Report from './pages/Report';
import Register from './pages/Register';
import Login from './pages/Login';
import LoansBusiness from './pages/LoansBusiness';
import Enterprises from './pages/Enterprises';
import TravelZone from './pages/TravelZone';
import Insurance from './pages/Insurance';
import ScrollToTop from "./components/ScrollToTop";

function AppLayout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      {/* Always show Header */}
      <Header />

      {/* No container only for Home */}
      {isHome ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fixed-deposit" element={<ProtectedRoute><FixedDeposit /></ProtectedRoute>} />
          <Route path="/loan" element={<ProtectedRoute><Loan /></ProtectedRoute>} />
          <Route path="/chit" element={<ProtectedRoute><Chit /></ProtectedRoute>} />
          <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
          <Route path="/business-loans" element={<LoansBusiness />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/travel-zone" element={<TravelZone />} />
          <Route path="/insurance-plan" element={<Insurance />} />

          
        </Routes>
      ) : (
        <div className="app-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/fixed-deposit" element={<ProtectedRoute><FixedDeposit /></ProtectedRoute>} />
            <Route path="/loan" element={<ProtectedRoute><Loan /></ProtectedRoute>} />
            <Route path="/chit" element={<ProtectedRoute><Chit /></ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
            <Route path="/business-loans" element={<LoansBusiness />} />
            <Route path="/enterprises" element={<Enterprises />} />
            <Route path="/travel-zone" element={<TravelZone />} />
            <Route path="/insurance-plan" element={<Insurance />} />

          </Routes>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <AppLayout />
    </BrowserRouter>
  );
}
