import React from 'react'
import useInView from '../hooks/useInview'

const ThankyouSection = () => {
   const [ref, inView] = useInView(0.5)

   return (
     <div ref={ref} className={`section-period ${inView ? 'in-view' : ''}`}>
       <div className="period-sub-text">Kết thúc thuyết trình</div>
       <h2
         ref={ref}
         className={`period-main-text upd ${inView ? 'fade-up' : ''}`}
       >
         <span className="word visible">
           Cảm ơn các bạn đã lắng nghe
         </span>
       </h2>
       <div className="period-sub-text p1-bottom p1">
         QnA<br />Game

       </div>
     </div>
   )
}

export default ThankyouSection