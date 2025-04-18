import React, { useState } from 'react'
import useInView from '../hooks/useInview';

const CQQuestion = () => {
   const [isFlipped, setIsFlipped] = useState(false);
   const [titleRef, titleInView] = useInView(0.5);

   return (
      <div className="relative h-screen w-full perspective">
         {/* Background image */}
         <img
            src="/communism.jpg"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
            alt="Economic Background"
         />
         {/* Overlay color */}
         <div className="absolute inset-0 bg-[#fdf5e6] z-10 opacity-50" />

         {/* Flashcard container */}
         <div
            ref={titleRef}
            className={`relative z-20 flex items-center justify-center h-full transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'
               }`}
         >
            <div
               className={`w-[80vw] max-w-4xl h-[60vh] sm:h-[65vh] [transform-style:preserve-3d] transition-transform duration-700 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''
                  }`}
               onClick={() => setIsFlipped(!isFlipped)}
            >
               {/* FRONT SIDE */}
               <div className="absolute w-full h-full bg-[#f1eada]/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex items-center justify-center text-center text-black [backface-visibility:hidden]">
                  <p className="text-[2.5vh] sm:text-[3vh] text-left font-base" style={{ fontFamily: 'var(--font-primary)', lineHeight: '130%' }}>
                     Có nhận định cho rằng "Kinh tế phát triển thì chứng tỏ chính trị có sự tiến bộ nhất định; ngược lại, kinh tế khủng hoảng là dấu hiệu cho thấy sự bất cập của chính trị và đòi hỏi chính trị phải có sự điều chỉnh".
                     <br />
                     <br />
                     <span className="text-[3.2vh] font-bold">
                        Vậy theo anh (chị), tại sao trong thời kỳ chiến tranh, Đảng ta xác định phải ưu tiên chính trị, kinh tế là nhân tố phục vụ cho mục tiêu chính trị?
                     </span>
                  </p>
               </div>

               {/* BACK SIDE */}
               <div className="absolute w-full h-full bg-[#f1eada]/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex items-center justify-center text-center text-black rotate-y-180 [backface-visibility:hidden] overflow-y-auto">
                  <p className="text-[2.3vh] sm:text-[2.5vh] leading-snug text-left" style={{ fontFamily: 'var(--font-secondary)' }}>
                     <strong>Về góc độ triết học Mác-Lênin:</strong><br />
                     Kinh tế là cơ sở hạ tầng, giữ vai trò quyết định cuối cùng đối với kiến trúc thượng tầng, trong đó có chính trị.<br /><br />
                     Chính trị cũng có thể tác động trở lại rất mạnh mẽ đối với kinh tế, nhất là trong những thời điểm lịch sử đặc biệt.<br /><br />
                     <strong>Trong thời chiến:</strong><br />
                     Mục tiêu chính là giành độc lập, thế nên chính trị là yếu tố quyết định sự tồn vong dân tộc.<br />
                     Kinh tế phục vụ cho chính trị: hậu cần, lương thực, vũ khí…<br /><br />
                     <strong>Mối quan hệ linh hoạt:</strong><br />
                     Vai trò của kinh tế hay chính trị không cố định, mà thay đổi linh hoạt theo nhiệm vụ lịch sử từng giai đoạn.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CQQuestion
