import React from 'react'
import useInView from '../hooks/useInview'

const CQSection = () => {
  const [ref, inView] = useInView(0.5)
    
      return (
        <div ref={ref} className={`section-period ${inView ? 'in-view' : ''}`}>
          <div className="period-sub-text">Phần 4</div>
          <h2
            ref={ref}
            className={`period-main-text upd ${inView ? 'fade-up' : ''}`}
          >
            <span className="word visible">
              Trả lời Chapter Question
            </span>
          </h2>
          <div className="period-sub-text p1-bottom p1">
           <br />

          </div>
        </div>
      )
}

export default CQSection
