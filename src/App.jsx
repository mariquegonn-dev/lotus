import React from "react";
import "./App.css";
import { CustomerProvider } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Static/Header";
import Home from "./Components/Home";
import CaloriasDiarias from "./Components/Rotas/CaloriasDiarias";
import Macronutrientes from "./Components/Rotas/Macronutrientes";
import Footer from "./Components/Static/Footer";
const App = () => {
  return (
    <section className="container">
      <CustomerProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="caloriasDiarias" element={<CaloriasDiarias />} />
            <Route path="macronutrientes" element={<Macronutrientes />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CustomerProvider>
    </section>
  );
};

export default App;
