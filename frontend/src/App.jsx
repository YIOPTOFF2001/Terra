
import LandingPage from './pages/LandingPage'
import { Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import FarmerLogin from './pages/auth/FarmerLogin';
import VendorLogin from './pages/auth/VendorLogin';
import SignIn from './pages/auth/SignIn';
import FarmerDashboard from './pages/dashboard/FarmerDashboard';
import CustomerDashboard from './pages/dashboard/CustomerDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/login/farmer" element={<FarmerLogin />} />
      <Route path="/login/vendor" element={<VendorLogin />} /> 
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
      <Route path="/dashboard/customer" element={<CustomerDashboard />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      
      
  
    </Routes>
  )     

}

export default App
