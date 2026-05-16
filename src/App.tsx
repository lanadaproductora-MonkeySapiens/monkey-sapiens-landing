import { useState } from 'react';
import Header from './components/Header';
import HeroWithCharacter from './components/HeroWithCharacter';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './index.css';

export default function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setShowContactModal(true)} />
      <HeroWithCharacter onCTAClick={() => setShowContactModal(true)} />
      <Services />
      <Process />
      <Pricing onCTAClick={() => setShowContactModal(true)} />
      <CTA onCTAClick={() => setShowContactModal(true)} />
      <Footer />
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
}
