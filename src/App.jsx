import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/MainLayout";
import SignUp from "./pages/SignUp";
import SignInOutContainer from "./containers/SignInOutContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInOutContainer />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
