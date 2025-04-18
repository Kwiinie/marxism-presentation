import React, { useEffect } from 'react';

import { useState } from 'react';

import { motion } from "framer-motion";
const HeroSection = () => {
   const timelinePeriods = [
      {
         id: 1,
         chapter: "Phần 1",
         period: "Khái niệm",
         targetId: "period-1",
         images: [
            "/definition1.jpg",
            "/definition2.jpg",
            "/definition3.jpg",
         ],
         className: "hero-period ch-1"
      },
      {
         id: 2,
         chapter: "Phần 2",
         period: "Quy luật về mối quan hệ biện chứng",
         targetId: "period-2",
         images: [
            "/relationship1.jpg",
         ],
         className: "hero-period ch-2"
      },
      {
         id: 3,
         chapter: "Phần 3",
         period: "Ý nghĩa trong đời sống xã hội",
         targetId: "period-3",
         images: [
            "/methodology.jpg",
         ],
         className: "hero-period ch-3"
      },
      {
         id: 4,
         chapter: "Phần 4",
         period: "Trả lời CQ",
         targetId: "period-4",
         images: [
            "/CQ.jpg"
         ],
         className: "hero-period last"
      }
   ];

   const scrollToSection = (targetId, e) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const containerVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 1,
            ease: "easeOut"
         }
      }
   };

   return (
      <motion.section
         className="hero px-4 sm:px-8 md:px-12 py-12"
         initial="hidden"
         animate="visible"
         variants={containerVariants}
      >
         {/* TOP */}
         <div className="hero-top-wrap flex justify-center mb-10">
            <div className="hero-top-center text-center">
               <h1 className="hero-heading font-black tracking-tight leading-tight text-2xl sm:text-4xl md:text-6xl lg:text-7xl">
                  {[
                     'BIỆN', 'CHỨNG', 'GIỮA', 'CƠ', 'SỞ', 'HẠ', 'TẦNG',
                     'VÀ', 'KIẾN', 'TRÚC', 'THƯỢNG', 'TẦNG', 'CỦA', 'XÃ', 'HỘI'
                  ].map((word, i) => (
                     <span
                        key={i}
                        className={`inline-block word word-${i + 1} mx-[0.2rem]`}
                     >
                        {word}
                     </span>
                  ))}
               </h1>
            </div>
         </div>

         {/* BOTTOM */}
         <div className="hero-bottom-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelinePeriods.map((period) => (
               <a
                  key={period.id}
                  data-lenis-restart=""
                  data-target={`#${period.targetId}`}
                  href="#"
                  className="group block bg-[#fdf5e6] border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
                  onClick={(e) => scrollToSection(period.targetId, e)}
                  style={{
                     transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                     transformStyle: 'preserve-3d'
                  }}
               >
                  <div className="hero-period-chapter px-4 pt-4 text-sm font-medium text-gray-500">
                     {period.chapter}
                  </div>
                  <div className="hero-period-text upd px-4 text-xl font-bold mb-2 text-black">
                     {period.period}
                  </div>
                  <div className="hero-img-wrap flex justify-center items-center gap-2 px-4 pb-4">
                     {period.images.map((image, index) => (
                        <img
                           key={index}
                           src={image}
                           loading="lazy"
                           alt=""
                           className={`hero-img w-full h-auto max-w-[120px] object-cover ${index === 0 ? 'up' : ''}`}
                        />
                     ))}
                  </div>
               </a>
            ))}
         </div>
      </motion.section>

   );
};



export default HeroSection;