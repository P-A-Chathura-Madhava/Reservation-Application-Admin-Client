import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInOutContainer from './containers/SignInOutContainer';
import Dashboard from './pages/Dashboard';
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Trains from "./pages/Trains";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignInOutContainer />}/> */}
        <Route path="/" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignup />} />
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path="/users" element={<PrivateRoutes><Users /></PrivateRoutes>} />
        <Route path="/trains" element={<PrivateRoutes><Trains /></PrivateRoutes>} />
        <Route path="/bookings" element={<PrivateRoutes><Bookings /></PrivateRoutes>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
