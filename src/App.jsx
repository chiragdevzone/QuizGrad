import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HowItWorks from "./pages/HowItWorks";
import Layout from "./pages/Layout";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((store) => store.auth.user);
  const Dashboard = lazy(() => import("./pages/Dashboard"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/features" element={<Features />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/dashboard"
            element={
              user ? (
                <Suspense fallback={<h2>Loading...</h2>}>
                  {" "}
                  <Dashboard />{" "}
                </Suspense>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
