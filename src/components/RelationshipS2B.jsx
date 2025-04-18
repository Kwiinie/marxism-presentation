import React from 'react';
import useInView from '../hooks/useInview';

const RelationshipS2B = () => {
  const [ref, inView] = useInView(0.5);

  return (
    <div ref={ref} className="h-screen w-full flex items-center justify-center px-4">
      {/* Title and both decoration images */}
      <div className="relative text-center overflow-hidden">
        {/* Top-left image relative to title */}
        <img
          src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9fa496264c8d47e977_IMG_1571.GIF"
          alt="Top Left Decoration"
          className={`absolute -top-10 -left-10 w-30 transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 -translate-y-10'
          }`}
        />

        {/* Centered Title */}
        <div
          className={`text-[10vh] font-bold max-w-[70vw] leading-tight transition-all duration-1000 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          Sự tác động trở lại của kiến trúc thượng tầng đối với cơ sở hạ tầng
        </div>

        {/* Bottom-right image relative to title */}
        <img
          src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9e474648f0196ab48d_IMG_1570.GIF"
          alt="Bottom Right Decoration"
          className={`absolute -bottom-10 -right-10 w-40 transition-all duration-1000 ease-out delay-200 ${
            inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 translate-y-10'
          }`}
        />
      </div>
    </div>
  );
};

export default RelationshipS2B;