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
      <div ref={ref} className="flex flex-col md:flex-row min-h-screen w-full ">
         <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">


            <h1 className="section-main-heading s1790 top text-6xl font-black tracking-tighter mb-16">
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

            <div className="mt-5">
               <motion.div
                  className="mt-5"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 1, delay: 1 }} // Delay after heading words animation
               >
                  <p className="text-xl leading-snug" style={{ fontFamily: 'var(--font-secondary)' }}>
                     Là toàn bộ quan điểm tư tưởng xã hội và thiết chế chính trị – xã hội: <br />

                     <ul className="list-disc pl-6 text-lg leading-relaxed">
                        <li>
                           <span className="relative" style={{ fontFamily: 'var(--font-secondary)' }}>
                              <span className="border-b-2 border-red-500 pb-0" style={{ fontFamily: 'var(--font-secondary)' }}>
                                 Tư tưởng:
                              </span>{' '}
                           </span>
                           chính trị, pháp luật, đạo đức, tôn giáo, triết học, nghệ thuật…
                        </li>

                        <li className="mt-4">
                           <span className="relative" style={{ fontFamily: 'var(--font-secondary)' }}>
                              <span className="border-b-2 border-red-500 pb-0" style={{ fontFamily: 'var(--font-secondary)' }}>
                                 Thiết chế:
                              </span>{' '}
                           </span>
                           nhà nước, đảng, tòa án, trường học, nhà thờ…
                        </li>
                     </ul>
                     <br />
                     cùng những quan hệ nội tại của thượng tầng hình thành nên một cơ sở hạ tầng nhất định.
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Right side with single image */}
         <div className="w-full md:w-1/2 h-screen relative">
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
