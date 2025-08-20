import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import NewArrivals from './components/NewArrivals/NewArrivals';
import MostSearched from './components/MostSearched/MostSearched';
import Discounts from './components/Discounts/Discounts';

// Páginas nuevas
import BlogSection from './components/BlogSection/BlogSection';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <FeaturedProducts />
              <NewArrivals />
              <MostSearched />
              <BlogSection />
              <Discounts />
              <ContactForm />
            </>
          }
        />

        



        
      </Routes>
    </Router>
  );
}

export default App;

