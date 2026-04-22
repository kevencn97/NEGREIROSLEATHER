import './keven.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { Process } from './components/Process';
import { Collection } from './components/Collection';
import { Positioning } from './components/Positioning';
import { Editorial } from './components/Editorial';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { LeadPopup } from './components/LeadPopup';

export default function App() {
  return (
    <div className="kn-site">
      <Header />
      <Hero />
      <Advantages />
      <Process />
      <Collection />
      <Positioning />
      <Editorial />
      <CTAFinal />
      <Footer />
      <LeadPopup />
    </div>
  );
}
