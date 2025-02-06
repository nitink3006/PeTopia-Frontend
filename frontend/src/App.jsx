import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Pets from "./components/Pets/Pets";
import AdoptForm from "./components/AdoptForm/AdoptForm";
import AdminLogin from "./components/AdminPanel/AdminLogin";
import "./App.css";

const Layout = ({ children }) => (
  <>
    <Navbar title="PawFinds" />
    {children}
    <Footer title="PawFinds" />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Home description="Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home." />
            </Layout>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Layout>
              <Services />
            </Layout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Layout>
              <Contact />
            </Layout>
          } 
        />
        <Route 
          path="/pets" 
          element={
            <Layout>
              <Pets />
            </Layout>
          } 
        />
        <Route 
          path="/adopt-form" 
          element={
            <Layout>
              <AdoptForm />
            </Layout>
          } 
        />
        <Route 
          path="/admin" 
          element={<AdminLogin />} 
        />
      </Routes>
    </Router>
  );
};

export default App;