import React, { useState } from 'react'
import useInView from '../hooks/useInview'
import { motion } from 'framer-motion';

const Meaning = () => {
   const [ref, inView] = useInView(0.5);
   const [showQuote, setShowQuote] = useState(false);
 
   const handleEntryClick = () => {
     setShowQuote(true);
   };
 
   const wipeDownVariant = {
     hidden: { opacity: 0, y: -30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
   };
 
   return (
     <div className="min-h-screen bg-[#f6e9cc] text-black flex flex-col items-center justify-center px-6 py-12 text-center space-y-6">
       {/* Entry Image */}
       <img
         src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbf4f2d0083bd3f833dfb_IMG_1629.GIF"
         alt="Entry Visual"
         className="w-25 h-25 object-cover cursor-pointer transition-transform hover:scale-105"
         onClick={handleEntryClick}
       />
 
       {/* Subtitle */}
       <motion.p
         className="text-gray-500 text-sm font-medium"
         variants={wipeDownVariant}
         initial="hidden"
         animate="visible"
       >
         Ý nghĩa xã hội
       </motion.p>
 
       {/* Main Text */}
       <motion.p
         className="text-2xl font-semibold leading-snug max-w-2/3"
         variants={wipeDownVariant}
         initial="hidden"
         animate="visible"
         style={{ fontFamily: 'var(--font-primary)' }}
       >
         Kinh tế và chính trị có mối quan hệ biện chứng, tác động qua lại lẫn nhau<br />
         Chính trị là biểu hiện tập trung của kinh tế.<br />
         Tuyệt đối hóa một yếu tố (chỉ chú trọng kinh tế hoặc chính trị) là sai lầm
       </motion.p>
 
       {/* Quote & Lenin */}
       {showQuote && (
         <>
           <img
             src="/lenin.jpg"
             alt="Lenin"
             className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 shadow-sm"
           />
 
           <blockquote
             className="italic text-lg max-w-2xl mt-4 text-gray-800"
             style={{ fontFamily: 'var(--font-secondary)' }}
           >
             “Chính trị là sự biểu hiện tập trung của kinh tế… Chính trị không thể không chiếm địa vị hàng đầu so với kinh tế.”
           </blockquote>
 
           <p
             className="text-sm font-medium text-gray-600"
             style={{ fontFamily: 'var(--font-secondary)' }}
           >
             (V.I. Lênin)
           </p>
         </>
       )}
     </div>
   );
 };
 
 export default Meaning;
