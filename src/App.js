import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
        <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/service" element={<ProtectedRoute><Service /></ProtectedRoute>} />
              <Route path="/fixed-deposit" element={<ProtectedRoute><FixedDeposit /></ProtectedRoute>} />
              <Route path="/loan" element={<ProtectedRoute><Loan /></ProtectedRoute>} />
              <Route path="/chit" element={<ProtectedRoute><Chit /></ProtectedRoute>} />
              <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
