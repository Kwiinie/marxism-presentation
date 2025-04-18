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
         className="hero"
         initial="hidden"
         animate="visible"
         variants={containerVariants}
      >
         <div className="hero-top-wrap">
            <div className="hero-top-center">
               <h1 className="hero-heading">
                  <span className="word word-1">BIỆN</span>{' '}
                  <span className="word word-2">CHỨNG</span>{' '}
                  <span className="word word-3">GIỮA</span>{' '}
                  <span className="word word-4">CƠ</span>{' '}
                  <span className="word word-5">SỞ</span>{' '}
                  <span className="word word-6">HẠ</span>{' '}
                  <span className="word word-7">TẦNG</span>{' '}
                  <span className="word word-8">VÀ</span>{' '}
                  <span className="word word-9">KIẾN</span>{' '}
                  <span className="word word-10">TRÚC</span>{' '}
                  <span className="word word-11">THƯỢNG</span>{' '}
                  <span className="word word-12">TẦNG</span>{' '}
                  <span className="word word-13">CỦA</span>{' '}
                  <span className="word word-14">XÃ</span>{' '}
                  <span className="word word-15">HỘI</span>{' '}
               </h1>

               {/* <div className="hero-top-text">
                  <span className='font-bold'>I. Học thuyết hình thái kinh tế-xã hội</span>
                  <br />
                  <span className="pt-2">3. Biện chứng giữa cơ sở hạ tầng</span> và kiến trúc thượng tầng của xã hội
               </div> */}
            </div>
         </div>

         <div className="hero-bottom-wrap">
            {timelinePeriods.map((period) => (
               <a
                  key={period.id}
                  data-lenis-restart=""
                  data-target={`#${period.targetId}`}
                  href="#"
                  className={period.className}
                  onClick={(e) => scrollToSection(period.targetId, e)}
                  style={{
                     transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                     transformStyle: 'preserve-3d'
                  }}
               >
                  <div className="hero-period-chapter">{period.chapter}</div>
                  <div className="hero-period-text upd">{period.period}</div>
                  <div className="hero-img-wrap">
                     {period.images.map((image, index) => (
                        <img
                           key={index}
                           src={image}
                           loading="lazy"
                           alt=""
                           className={`hero-img ${index === 0 ? 'up' : ''}`}
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