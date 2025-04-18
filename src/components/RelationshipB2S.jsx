import React, { useState } from 'react'
import useInView from '../hooks/useInview';

const RelationshipB2S = () => {
   const notes = [
      {
         id: 1,
         header: '1/3',
         title: 'Cơ sở hạ tầng',
         content: 'Cơ sở hạ tầng (CSHT) là nền tảng kinh tế – vật chất của xã hội, quyết định kiến trúc thượng tầng (KTTT) – bao gồm chính trị, pháp luật, đạo đức, tư tưởng...',
      },
      {
         id: 2,
         header: '2/3',
         title: 'Cơ sở hạ tầng',
         content: 'KTTT dù biểu hiện phong phú, phức tạp nhưng xét đến cùng đều do CSHT quy định, từ nguồn gốc, cấu trúc đến sự vận động và phát triển.',
      },
      {
         id: 3,
         header: '3/3',
         title: 'Cơ sở hạ tầng',
         content: 'CSHT thay đổi → KTTT sớm hay muộn cũng sẽ thay đổi theo. Tuy nhiên, các thành tố trong KTTT thay đổi không đồng đều',
      },
   ];

   const [order, setOrder] = useState([0, 1, 2]);

   const [titleRef, titleInView] = useInView(0.5);

   const cycleNotes = () => {
      setOrder(prev => {
         const [first, ...rest] = prev;
         return [...rest, first];
      });
   };

   return (
      <div className="relative h-screen w-full">
         {/* Background image */}
         <img
            src="/economic.jpg"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
            alt="Economic Background"
         />
         <div className="absolute inset-0 bg-[#fdf5e6] z-10 opacity-50" />

         {/* Title */}
         <div
            ref={titleRef}
            className={`relative z-20 flex items-start justify-start h-full text-black px-4 sm:px-8 transition-all duration-1000 ease-out ${titleInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
               }`}
         >
            <div
               className="text-3xl sm:text-5xl md:text-[8vh] font-bold max-w-full sm:max-w-[80%] lg:max-w-[50%] leading-tight"
               style={{ fontFamily: 'var(--font-primary)' }}
            >
               Vai trò quyết định của cơ sở hạ tầng đối với kiến trúc thượng tầng
            </div>
         </div>

         {/* Notes container */}
         <div
            className="absolute bottom-10 right-4 sm:right-20 lg:right-40 w-[90vw] max-w-[600px] aspect-[2/1] cursor-pointer"
            onClick={cycleNotes}
         >
            {order.map((noteIndex, i) => {
               const note = notes[noteIndex];
               const zIndex = 30 - i * 10;
               const scale = 1 - i * 0.02;
               const translate = i * 8;

               return (
                  <div
                     key={note.id}
                     className="absolute w-full h-full bg-[#fdf5e6] border border-[#d6c8a6] rounded-sm shadow-lg text-black p-4 sm:p-6 transition-all duration-500 ease-in-out"
                     style={{
                        zIndex: zIndex,
                        transform: `translate(${translate}px, ${translate}px) scale(${scale})`,
                        fontFamily: 'var(--font-secondary)',
                     }}
                  >
                     <div className="flex justify-between mb-2 sm:mb-3 text-base sm:text-lg font-semibold font-mono">
                        <span>{note.header}</span>
                        <span className="text-[#b6ab91]">{note.title}</span>
                     </div>
                     <p className="text-base sm:text-lg md:text-[1.5rem] leading-relaxed">
                        {note.content}
                     </p>
                  </div>
               );
            })}
         </div>
      </div>

   );
};

export default RelationshipB2S;
