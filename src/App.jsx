import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Static/Header";
import Home from "./Components/Home";
import CaloriasDiarias from "./Components/Rotas/CaloriasDiarias";
import Macronutrientes from "./Components/Rotas/Macronutrientes";
import Footer from "./Components/Static/Footer";
import { CustomerProvider } from "./Context";
const App = () => {
  return (
    <section className="container">
      <Provider store={store}>
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
      </Provider>
    </section>
  );
};

export default App;
