import React, { useEffect, useRef } from 'react'
import DefinitionTitle from './DefinitionTitle'
import DefinitionBase from './DefinitionBase'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DefinitionBaseTitle from './DefinitionBaseTitle'
import DefinitionBaseStructure from './DefinitionBaseStructure'
import DefinitionSuperstructure from './DefinitionSuperstructure'
import CQSection from './CQSection'
import RelationshipSection from './RelationshipSection'
import RelationshipB2S from './RelationshipB2S'
import RelationshipTitle from './RelationshipTitle'
import RelationshipS2B from './RelationshipS2B'
import RelationshipS2B1 from './RelationshipS2B1'
import RelationshipS2B2 from './RelationshipS2B2'
import CQQuestion from './CQQuestion'
import MeaningTitle from './MeaningTitle'
import Meaning from './Meaning'


const DefinitionSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;
    
    if (!section || !track) return;
    
    // Function to calculate the scroll amount dynamically
    const getScrollAmount = () => {
      // Get the total width of the content
      const trackWidth = track.scrollWidth;
      // Return negative value of (total width - viewport width)
      return -(trackWidth - window.innerWidth);
    };
    
    // Create the animation
    const horizontalAnimation = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
    });
    
    // Create the scroll trigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: horizontalAnimation,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false,
      id: "definition-scroll",
      onUpdate: (self) => {
        // Update progress bar if it exists
        if (progressBar) {
          gsap.to(progressBar, {
            width: `${self.progress * 100}%`,
            duration: 0.1,
            overwrite: true
          });
        }
      }
    });
    
    // Handle resize to ensure everything recalculates properly
    const handleResize = () => {
      // Recalculate ScrollTrigger values
      ScrollTrigger.refresh();
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      // Clean up
      if (scrollTrigger) scrollTrigger.kill();
      if (horizontalAnimation) horizontalAnimation.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
   
   return (
     <section ref={sectionRef} className="definition-section horizontal-section">
       <div className="horizontal-track" ref={trackRef}>
         <div className="horizontal-content">
           <DefinitionTitle />
           <DefinitionBaseTitle />
           <DefinitionBaseStructure />
           <div className="definition-superstructure">
           <DefinitionSuperstructure />
           </div>
           <RelationshipTitle/>
           <RelationshipB2S/>
           <RelationshipS2B/>
           <RelationshipS2B1/>
           <RelationshipS2B2/>
           <MeaningTitle/>
           <Meaning/>
           <CQSection/>
           <CQQuestion/>
         </div>
       </div>
     </section>
   );
 };
 
export default DefinitionSection;