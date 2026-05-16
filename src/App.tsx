import { useState } from 'react';
import Header from './components/Header';
import HeroConversion from './components/HeroConversion';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Proof from './components/Proof';
import Pricing from './components/Pricing';
import Objections from './components/Objections';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './index.css';

export default function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setShowContactModal(true)} />
      <HeroConversion onCTAClick={() => setShowContactModal(true)} />
      <ValueProposition />
      <Services />
      <Proof />
      <Pricing onCTAClick={() => setShowContactModal(true)} />
      <Objections />
      <FinalCTA onCTAClick={() => setShowContactModal(true)} />
      <Footer />
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </div>
  );
}
