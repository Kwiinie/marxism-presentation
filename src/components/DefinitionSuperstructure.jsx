import React, { useEffect, useRef, useState } from 'react'
import useInView from '../hooks/useInview'
import { motion } from 'framer-motion';


const DefinitionSuperstructure = () => {
   const [inView, setInView] = useState(false);
   const [visibleWords, setVisibleWords] = useState(0);
   const [showImage, setShowImage] = useState(false);
   const ref = useRef(null);

   const words = ['KHÁI', 'NIỆM', 'KIẾN', 'TRÚC', 'THƯỢNG', 'TẦNG'];

   // Create a custom hook to replicate useInView functionality
   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            setInView(entry.isIntersecting);
         },
         { threshold: 0.5 }
      );

      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         if (ref.current) {
            observer.unobserve(ref.current);
         }
      };
   }, []);

   // Animate words when in view
   useEffect(() => {
      if (inView) {
         setVisibleWords(0);
         const wordInterval = setInterval(() => {
            setVisibleWords(prev => {
               if (prev >= words.length - 1) {
                  clearInterval(wordInterval);
               }
               return prev + 1;
            });
         }, 200);
         return () => clearInterval(wordInterval);
      }
   }, [inView]);

   // Show image when inView
   useEffect(() => {
      if (inView) {
         setTimeout(() => {
            setShowImage(true);
         }, 600); // Delay image reveal after words animation starts
      } else {
         setShowImage(false);
      }
   }, [inView]);

   return (
      <div ref={ref} className="flex flex-col md:flex-row min-h-screen w-full bg-[#fdf5e6]">
         {/* Left content */}
         <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-12 py-12 flex flex-col justify-center">
            <h1 className="section-main-heading s1790 top text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-10 sm:mb-16">
               {words.map((word, i) => (
                  <span
                     key={i}
                     style={{
                        opacity: i <= visibleWords ? 1 : 0,
                        transition: 'opacity 0.5s',
                        display: 'inline-block',
                        marginRight: '0.5rem'
                     }}
                  >
                     {word}
                  </span>
               ))}
            </h1>

            <div className="mt-6 sm:mt-10">
               <motion.div
                  className="mt-6 sm:mt-10"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 1, delay: 1 }}
               >
                  <p className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-secondary)' }}>
                     Là toàn bộ quan điểm tư tưởng xã hội và thiết chế chính trị – xã hội:
                     <ul className="list-disc pl-6 mt-4 space-y-4">
                        <li>
                           <span className="border-b-2 border-red-500 pb-0">
                              Tư tưởng:
                           </span>{' '}
                           chính trị, pháp luật, đạo đức, tôn giáo, triết học, nghệ thuật…
                        </li>
                        <li>
                           <span className="border-b-2 border-red-500 pb-0">
                              Thiết chế:
                           </span>{' '}
                           nhà nước, đảng, tòa án, trường học, nhà thờ…
                        </li>
                     </ul>
                     <br />
                     cùng những quan hệ nội tại của thượng tầng hình thành nên một cơ sở hạ tầng nhất định.
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Right image */}
         <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
            <img
               src="/superstructure.jpg"
               alt="superstructure"
               className="w-full h-full object-cover absolute inset-0"
            />
         </div>
      </div>

   );
};


export default DefinitionSuperstructure
