import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import NewArrivals from './components/NewArrivals/NewArrivals';
import MostSearched from './components/MostSearched/MostSearched';
import Discounts from './components/Discounts/Discounts';
// Importa otros componentes que tengas, como un Footer

function App() {
  return (
    <Router>
      <Header /> {/* El Header usualmente va fuera de Routes si es fijo en todas las páginas */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Aquí es donde colocas los componentes para la página de inicio */}
              <Carousel />
              <FeaturedProducts />
              <NewArrivals />
              <MostSearched />
              <Discounts />
            </>
          }
        />

        {/* Ejemplo: Si tuvieras una página solo para Novedades */}
        {/* <Route path="/novedades" element={<NewArrivalsPage />} /> */}

        {/* Ejemplo: Si tuvieras una página para un producto específico */}
        {/* <Route path="/productos/:id" element={<ProductDetailPage />} /> */}

      </Routes>

      {/* Un Footer también iría fuera de Routes si es fijo */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
