import React, { useEffect, useRef } from 'react'
import RelationshipTitle from './RelationshipTitle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import RelationshipB2S from './RelationshipB2S';

const RelationshipSection = () => {
   const sectionRef = useRef(null);
   const trackRef = useRef(null);

   gsap.registerPlugin(ScrollTrigger);

   useEffect(() => {
      const section = sectionRef.current;
      const track = trackRef.current;

      // Calculate the scroll distance more reliably
      const updateScrollTrigger = () => {
         // Get the total width of all items in the track
         const totalWidth = track.scrollWidth;
         const viewportWidth = window.innerWidth;

         // The distance to scroll is the difference between total width and viewport width
         const scrollDistance = totalWidth - viewportWidth;

         // Create the ScrollTrigger
         const ctx = gsap.context(() => {
            // Clear any existing ScrollTriggers to prevent duplicates
            ScrollTrigger.getAll().forEach(st => st.kill());

            gsap.to(track, {
               x: -scrollDistance,
               ease: 'none',
               scrollTrigger: {
                  trigger: section,
                  start: 'top top',
                  end: `+=${scrollDistance}px`,
                  scrub: true,
                  pin: true,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                  markers: false,
                  id: 'definition-section-scroll'
               }
            });
         }, section);

         return ctx;
      };

      // Initial setup
      const ctx = updateScrollTrigger();

      // Update on window resize
      const handleResize = () => {
         ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
         ctx.revert();
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <section ref={sectionRef} className="definition-section horizontal-section">
         <div className="horizontal-track" ref={trackRef}>
            <div className="horizontal-content">
               <RelationshipTitle />
               <RelationshipB2S />
            </div>
         </div>
      </section>
   );
};

export default RelationshipSection;