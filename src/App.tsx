import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pillars from './components/Pillars';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setShowContactModal(true)} />
      <Hero onCTAClick={() => setShowContactModal(true)} />
      <Services />
      <Pillars />
      <Pricing onCTAClick={() => setShowContactModal(true)} />
      <CTA onCTAClick={() => setShowContactModal(true)} />
      <Footer />
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
}

export default App;
