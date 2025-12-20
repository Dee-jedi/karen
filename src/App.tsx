import { Home, Gallery, Pricing, Contact, NotFound } from './pages';
import { Route, Routes } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />

      <div className=" pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <BottomNav />
    </>
  );
};

export default App;
