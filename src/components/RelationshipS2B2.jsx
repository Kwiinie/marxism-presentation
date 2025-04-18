import React from 'react'
import useInView from '../hooks/useInview';
import { motion } from 'framer-motion';

const RelationshipS2B2 = () => {
   const [ref, inView] = useInView(0.5);

   return (
      <div ref={ref} className="relative h-screen w-full overflow-hidden">
         {/* TEXT SECTION */}
         <motion.div
            className="absolute top-10 left-20 max-w-1/2 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
         >
            <p className="text-xl text-gray-400 mb-2" style={{ fontFamily: 'var(--font-secondary)' }}>
               Nội dung tác động trở lại
            </p>
            <p className="text-2xl leading-snug font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Củng cố, hoàn thiện và bảo vệ cơ sở hạ tầng sinh ra nó.
            </p>
            <p className="text-2xl leading-snug font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Ngăn chặn sự hình thành của CSHT mới.
            </p>
            <p className="text-2xl leading-snug font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Định hướng, tổ chức và xây dựng chế độ kinh tế.
            </p>
         </motion.div>

         <motion.div
            className="absolute top-75 left-20 max-w-1/2 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
         >
            <p className="text-xl text-gray-400 mb-2" style={{ fontFamily: 'var(--font-secondary)' }}>
               Phương thức tác động trở lại
            </p>

            <p className="text-2xl leading-snug font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Tác động theo hai chiều hướng
            </p>

            <div className="relative">
               <p className="text-xl leading-snug font-base text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
                  <strong>Chiều thuận:</strong> Khi KTTT phù hợp với xu hướng phát triển khách quan của CSHT (đặc biệt là lực lượng sản xuất), nó sẽ thúc đẩy nền kinh tế phát triển nhanh và bền vững hơn.
               </p>

               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9efc5ee4fb80fa0e60_07.GIF"
                  alt="Chiều thuận minh hoạ"
                  className="absolute top-5 w-[120px] z-10"
               />
            </div>

            <div className="relative">
               <p className="text-xl leading-snug font-base text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
                  <strong>Chiều nghịch:</strong> Nếu KTTT đi ngược lại với quy luật vận động của CSHT, thì sẽ kìm hãm, cản trở hoặc bóp méo quá trình phát triển kinh tế. Có thể dẫn đến xung đột, khủng hoảng toàn diện.
               </p>

               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9efc5ee4fb80fa0e60_07.GIF"
                  alt="Chiều nghịch minh hoạ"
                  className="absolute top-5 left-3 w-[120px] z-10"
               />
            </div>

            <p className="text-xl leading-snug font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Thông qua kiến trúc thượng tầng chính trị (nhà nước, pháp luật, thể chế)
            </p>

            <p className="text-xl leading-snug font-base text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Đây là bộ phận trung tâm và có sức tác động mạnh mẽ nhất. Thông qua công cụ quyền lực (pháp luật, tổ chức, trấn áp...), nhà nước điều chỉnh đời sống kinh tế, định hướng phát triển CSHT theo chiến lược cụ thể.
            </p>
         </motion.div>

         {/* COLLAGE: only back & middle image animate */}
         <div className="absolute bottom-15 right-25">
             <div className="relative w-64 h-64">
               {/* Middle Image */}
               <motion.img
                  src="/revolution.jpg"
                  alt="Debs cartoon"
                  className="absolute bottom-10 right-25 w-35 -rotate-10 z-10 shadow-lg"
                  initial={{ opacity: 0, y: 80 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
               />

               {/* Back Image */}
               <motion.img
                  src="/superbase.jpg"
                  alt="Debs in prison"
                  className="absolute bottom-10 left-30 w-40 rotate-8 z-0 shadow-md"
                  initial={{ opacity: 0, y: 80 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
               />

               {/* Static Badge */}
               <img
                  src="/marxlenin.jpg"
                  alt="Debs badge"
                  className="absolute bottom-0 left-[60px] w-30 h-30 rounded-full object-cover z-20 border-4 border-white shadow-xl" />
            </div>
         </div>

         {/* Top-right decorative GIF */}
         <img
            src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbf2fa1be6ddc9863b5e8_IMG_1588.GIF"
            alt="Top right decoration"
            className="absolute top-40 right-80 w-[100px] rotate-10 z-30"
         />
      </div>
   );
};

export default RelationshipS2B2;
