import React, { useEffect, useState } from 'react'

const NegativeMouse = ({ children, size = 32, color = 'white', shape = 'circle' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Create a style element to add global cursor styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);

    // Show the cursor when the mouse moves
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    // Hide the cursor when it leaves the window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Show the cursor when it enters the window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    // Track mouse clicks
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Remove event listeners and restore cursor on cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      // Remove the style element
      document.head.removeChild(styleElement);
    };
  }, []);

  // Determine border radius based on shape
  const getBorderRadius = () => {
    switch(shape) {
      case 'square':
        return '0%';
      case 'rounded':
        return '25%';
      case 'circle':
      default:
        return '50%';
    }
  };

  // Calculate cursor dimensions, making it smaller when clicking
  const cursorSize = isClicking ? size * 0.8 : size;
  
  return (
    <>
      {children}
      {isVisible && (
        <div 
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9999,
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'difference',
            transition: isClicking ? 'none' : 'width 0.2s, height 0.2s'
          }}
        >
          <div style={{
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            backgroundColor: color,
            borderRadius: getBorderRadius(),
            transition: isClicking ? 'none' : 'width 0.1s ease, height 0.1s ease'
          }}></div>
        </div>
      )}
    </>
  );
};

export default NegativeMouse;