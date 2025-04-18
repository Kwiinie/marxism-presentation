import { useEffect, useState } from 'react';
import React from 'react';


const ScaleNormalizer = ({ children }) => {
  const [scale, setScale] = useState(1);
  const targetDPI = 96; // Standard DPI for 100% scaling

  useEffect(() => {
    // Function to calculate and set the scale factor
    const calculateScale = () => {
      // Get the current devicePixelRatio (indicates browser zoom & OS scaling)
      const pixelRatio = window.devicePixelRatio || 1;
      
      // Calculate physical DPI (approximate)
      const physicalDPI = pixelRatio * 96;
      
      // Calculate scaling factor needed to normalize to target DPI
      const scaleFactor = targetDPI / physicalDPI;
      
      setScale(scaleFactor);
      
      // Apply the scale to the document root
      document.documentElement.style.transform = `scale(${scaleFactor})`;
      document.documentElement.style.transformOrigin = 'top left';
      
      // Adjust the body size to compensate for scaling
      document.body.style.width = `${100 / scaleFactor}vw`;
      document.body.style.height = `${100 / scaleFactor}vh`;
    };

    // Initial calculation
    calculateScale();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateScale);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', calculateScale);
    };
  }, []);

  return (
    <div className="scale-normalizer-wrapper">
      {children}
    </div>
  );
};

export default ScaleNormalizer;