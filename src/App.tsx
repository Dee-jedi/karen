import {
  Home,
  Gallery,
  Pricing,
  Contact,
  NotFound,
  PricingDetails,
} from './pages';
import { Route, Routes } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Loader from './components/Loader'; // Import the loader
import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust timing as needed (1500ms = 1.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing/:packageId" element={<PricingDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <BottomNav />
    </>
  );
};

export default App;
