const preventZoom = () => {
   // Prevent pinch zoom on touch devices - fixed for proper TypeScript support
   document.addEventListener('touchmove', function(event) {
     // Check if this is a gesture event with multiple touch points
     if (event.touches && event.touches.length > 1) {
       // It's likely a pinch-to-zoom gesture
       event.preventDefault();
     }
   }, { passive: false });
   
   // Alternative approach using touchstart to detect multi-touch
   let initialTouchDistance = 0;
   
   document.addEventListener('touchstart', function(event) {
     if (event.touches.length > 1) {
       // Calculate initial distance between touch points
       const dx = event.touches[0].clientX - event.touches[1].clientX;
       const dy = event.touches[0].clientY - event.touches[1].clientY;
       initialTouchDistance = Math.sqrt(dx * dx + dy * dy);
     }
   }, { passive: true });
   
   document.addEventListener('touchmove', function(event) {
     if (event.touches.length > 1 && initialTouchDistance > 0) {
       // Calculate current distance
       const dx = event.touches[0].clientX - event.touches[1].clientX;
       const dy = event.touches[0].clientY - event.touches[1].clientY;
       const currentDistance = Math.sqrt(dx * dx + dy * dy);
       
       // If distance changed significantly, it's a zoom gesture
       if (Math.abs(currentDistance - initialTouchDistance) > 10) {
         event.preventDefault();
       }
     }
   }, { passive: false });
   
   // Prevent zoom with keyboard shortcuts (Ctrl +/-)
   document.addEventListener('keydown', function(event) {
     if ((event.ctrlKey || event.metaKey) && 
         (event.key === '+' || event.key === '-' || event.key === '=')) {
       event.preventDefault();
     }
   });
   
   // Prevent zoom with mouse wheel when Ctrl is pressed
   document.addEventListener('wheel', function(event) {
     if (event.ctrlKey || event.metaKey) {
       event.preventDefault();
     }
   }, { passive: false });
 };
 
 export default preventZoom;