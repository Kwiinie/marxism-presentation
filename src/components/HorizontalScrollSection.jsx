import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'

const HorizontalScrollSection = ({ sectionName, children }) => {
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
       id: `${sectionName}-scroll`,
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
   }, [sectionName]);
    
   return (
     <section ref={sectionRef} className={`${sectionName}-section horizontal-section`}>
       <div className="progress-container">
         <div className="progress-bar" ref={progressRef}></div>
       </div>
       <div className="horizontal-track" ref={trackRef}>
         <div className="horizontal-content">
           {children}
         </div>
       </div>
     </section>
   );
 };

export default HorizontalScrollSection