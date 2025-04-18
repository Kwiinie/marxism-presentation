import React from 'react'
import useInView from '../hooks/useInview'

const MeaningTitle = () => {
  const [ref, inView] = useInView(0.5)
  
    return (
      <div ref={ref} className={`section-period ${inView ? 'in-view' : ''}`}>
        <div className="period-sub-text">Phần 3</div>
        <h2
          ref={ref}
          className={`period-main-text upd ${inView ? 'fade-up' : ''}`}
        >
          <span className="word visible">
            Ý nghĩa trong đời sống xã hội
          </span>
        </h2>
        <div className="period-sub-text p1-bottom p1">
<br />

        </div>
      </div>
    )
}

export default MeaningTitle
