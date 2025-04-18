import React from 'react'
import useInView from '../hooks/useInview';
import { motion } from 'framer-motion';

const RelationshipS2B2 = () => {
   const [ref, inView] = useInView(0.5);

   return (
      <div ref={ref} className="relative min-h-screen w-full overflow-hidden px-4 sm:px-8">
         {/* TEXT SECTION 1 */}
         <motion.div
            className="absolute top-10 left-4 sm:left-10 lg:left-20 max-w-[90%] lg:max-w-[50%] text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
         >
            <p className="text-base sm:text-lg text-gray-400 mb-2" style={{ fontFamily: 'var(--font-secondary)' }}>
               Nội dung tác động trở lại
            </p>
            {[
               'Củng cố, hoàn thiện và bảo vệ cơ sở hạ tầng sinh ra nó.',
               'Ngăn chặn sự hình thành của CSHT mới.',
               'Định hướng, tổ chức và xây dựng chế độ kinh tế.'
            ].map((line, idx) => (
               <p
                  key={idx}
                  className="text-2xl sm:text-3xl leading-snug font-bold text-black"
                  style={{ fontFamily: 'var(--font-secondary)' }}
               >
                  {line}
               </p>
            ))}
         </motion.div>

         {/* TEXT SECTION 2 */}
         <motion.div
            className="absolute top-[28rem] sm:top-[32rem] lg:top-80 left-4 sm:left-10 lg:left-20 max-w-[90%] lg:max-w-[50%] text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
         >
            <p className="text-base sm:text-lg text-gray-400 mb-2" style={{ fontFamily: 'var(--font-secondary)' }}>
               Phương thức tác động trở lại
            </p>

            <p className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Tác động theo hai chiều hướng
            </p>

            {/* Chiều thuận */}
            <div className="relative pl-6">
               <p className="text-base sm:text-xl text-black leading-snug" style={{ fontFamily: 'var(--font-secondary)' }}>
                  <strong>Chiều thuận:</strong> Khi KTTT phù hợp với xu hướng phát triển khách quan của CSHT (đặc biệt là lực lượng sản xuất), nó sẽ thúc đẩy nền kinh tế phát triển nhanh và bền vững hơn.
               </p>
               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9efc5ee4fb80fa0e60_07.GIF"
                  alt="Chiều thuận minh hoạ"
                  className="absolute top-2 left-0 w-20 sm:w-28 z-10"
               />
            </div>

            {/* Chiều nghịch */}
            <div className="relative pl-6">
               <p className="text-base sm:text-xl text-black leading-snug" style={{ fontFamily: 'var(--font-secondary)' }}>
                  <strong>Chiều nghịch:</strong> Nếu KTTT đi ngược lại với quy luật vận động của CSHT, thì sẽ kìm hãm, cản trở hoặc bóp méo quá trình phát triển kinh tế. Có thể dẫn đến xung đột, khủng hoảng toàn diện.
               </p>
               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9efc5ee4fb80fa0e60_07.GIF"
                  alt="Chiều nghịch minh hoạ"
                  className="absolute top-2 left-0 w-20 sm:w-28 z-10"
               />
            </div>

            <p className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-secondary)' }}>
               Thông qua kiến trúc thượng tầng chính trị (nhà nước, pháp luật, thể chế)
            </p>
            <p className="text-base sm:text-xl text-black leading-snug" style={{ fontFamily: 'var(--font-secondary)' }}>
               Đây là bộ phận trung tâm và có sức tác động mạnh mẽ nhất. Thông qua công cụ quyền lực (pháp luật, tổ chức, trấn áp...), nhà nước điều chỉnh đời sống kinh tế, định hướng phát triển CSHT theo chiến lược cụ thể.
            </p>
         </motion.div>

         {/* COLLAGE SECTION */}
         <div className="absolute bottom-10 right-4 sm:right-10 lg:right-20">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
               {/* Middle Image */}
               <motion.img
                  src="/revolution.jpg"
                  alt="Middle"
                  className="absolute bottom-10 right-10 w-28 sm:w-36 -rotate-6 z-10 shadow-lg"
                  initial={{ opacity: 0, y: 80 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
               />

               {/* Back Image */}
               <motion.img
                  src="/superbase.jpg"
                  alt="Back"
                  className="absolute bottom-10 left-5 w-32 sm:w-40 rotate-6 z-0 shadow-md"
                  initial={{ opacity: 0, y: 80 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
               />

               {/* Static Badge */}
               <img
                  src="/marxlenin.jpg"
                  alt="Badge"
                  className="absolute bottom-0 left-14 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover z-20 border-4 border-white shadow-xl"
               />
            </div>
         </div>

         {/* TOP-RIGHT GIF DECORATION */}
         <img
            src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbf2fa1be6ddc9863b5e8_IMG_1588.GIF"
            alt="Top Right"
            className="absolute top-16 right-10 sm:right-20 lg:right-40 w-24 sm:w-32 rotate-6 z-30"
         />
      </div>

   );
};

export default RelationshipS2B2;
