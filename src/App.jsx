import React, { useEffect } from 'react'

import './App.css'
import HeroSection from './components/HeroSection'
import Lenis from '@studio-freight/lenis';
import DefinitionSection from './components/DefinitionSection';
import CQSection from './components/CQSection';
import RelationshipSection from './components/RelationshipSection';
import ScaleNormalizer from './components/ScaleNomilizer';
import preventZoom from './components/PreventZoom';
import MeaningSection from './components/MeaningSection';
import CQFullSection from './components/CQFullSection';
import EndSection from './components/EndSection';
import NegativeMouse from './components/NegativeMouse';


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    preventZoom();
  }, []);


  return (
    <NegativeMouse>
      <div className="app-container">
        <HeroSection />
        <DefinitionSection />
        <RelationshipSection />
        <MeaningSection />
        <CQFullSection />
        <EndSection />
      </div>
    </NegativeMouse>

  )
}

export default App
