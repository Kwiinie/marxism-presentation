import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../hooks/useInview';

const RelationshipS2B1 = () => {
  const [ref, inView] = useInView(0.5);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Bottom-left main editorial text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute bottom-30 left-20 max-w-4xl text-left space-y-4"
      >
        <p className="text-lg text-gray-500 font-medium">Vì sao tác động?</p>

        <p className="text-2xl text-white leading-tight tracking-tight font-semibold">
          Do tính độc lập tương đối của kiến trúc thượng tầng.
        </p>
        <p className="text-xl text-white font-light leading-tight tracking-tight">
          Dù phản ánh CSHT, nhưng KTTT có quy luật vận động riêng, có thể thúc đẩy hoặc cản trở sự phát triển của CSHT.
        </p>

        <p className="text-2xl text-white leading-tight tracking-tight font-semibold">
          Do vai trò và sức mạnh vật chất của bộ máy tổ chức – thể chế
        </p>
        <p className="text-xl text-white font-light leading-tight tracking-tight">
          Nhà nước, pháp luật, chính trị là những bộ phận trung tâm của KTTT, có khả năng tổ chức và điều chỉnh toàn bộ đời sống xã hội.
        </p>
      </motion.div>

      {/* Top-right circle image with subtle zoom-in */}
      <motion.div
        ref={ref}
        animate={inView ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute top-10 left-40 w-40 h-40 rounded-full overflow-hidden border-gray-700"
      >
        <img
          src="anghen.jpg"
          alt="Circle Content"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Quote next to image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="absolute left-[25rem] top-[8rem] -translate-y-1/2 w-1/2 text-left"
      >
        <p className="text-xl italic font-light text-gray-400 leading-snug">
          “Quan điểm tư tưởng, đến lượt mình, nó tác động trở lại đến cơ sở hạ tầng kinh tế và có thể biến đổi nó trong giới hạn nhất định.”
        </p>
      </motion.div>

      {/* Bottom-right GIF with fade and slide-up */}
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9e4b4768e7dbe38394_IMG_1581.GIF"
        alt="Bottom Right Decoration"
        className="absolute bottom-80 right-20 w-40"
      />

      {/* Center GIF with soft zoom-in and fade */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9efc5ee4fb80fa0e60_07.GIF"
        alt="Centered Decoration"
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-70"
      />
    </div>
  );
};

export default RelationshipS2B1;
