import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import useInView from '../hooks/useInview';

const DefinitionBaseStructure = () => {
   const items = [
     'Quan hệ sản xuất',
     'Quan hệ sản xuất thống trị',
     'Quan hệ sản xuất tàn dư',
     'Quan hệ sản xuất mầm mống',
     'Lực lượng sản xuất',
   ];
 
   const [ref, inView] = useInView( 0.5 );
 
   return (
     <div
       style={{
         background: 'black',
         padding: '4rem 2rem',
         fontFamily: '"Libre Baskerville", serif',
         color: '#3e2f1c',
         minHeight: '100vh',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         position: 'relative', 
         gap: '3rem',
         textAlign: 'center',
       }}
     >

       {/* Title + Image Overlap */}
       <div style={{ position: 'relative', display: 'inline-block' }}>
         <div
           style={{
             fontSize: '4rem',
             fontWeight: 'bold',
             color: '#fefaf1',
             textShadow: '1px 1px 2px #3e2f1c',
             position: 'relative',
             fontFamily: 'var(--font-primary)',
             zIndex: 1,
           }}
         >
            Cấu trúc cơ sở hạ tầng
         </div>
 
         <img
           src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9e8bb407b3e089e05b_05.GIF"
           alt="center-icon"
           style={{
             width: 'auto',
             height: 'auto',
             borderRadius: '50%',
             objectFit: 'cover',
             position: 'absolute',
             top: '50%',
             left: '70%',
             transform: 'translate(-50%, -50%)',
             zIndex: 2,
             pointerEvents: 'none',
           }}
         />
       </div>
 
       {/* Nodes */}
       <div
         ref={ref}
         style={{
           display: 'grid',
           gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
           gap: '2rem',
           maxWidth: '1000px',
           width: '100%',
         }}
       >
         <AnimatePresence>
           {inView &&
             items.map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{
                   duration: 0.5,
                   delay: i * 0.2,
                 }}
                 style={{
                   padding: '1.2rem',
                   lineHeight: '120%',
                   color: '#fefaf1',
                   fontSize: '2.5rem',
                   fontFamily: 'var(--font-secondary)',
                 }}
               >
                 {item}
               </motion.div>
             ))}
         </AnimatePresence>
       </div>

     </div>
   );
 };
 
 export default DefinitionBaseStructure;

