import React from 'react'
import useInView from '../hooks/useInview'

const RelationshipTitle = () => {
  const [ref, inView] = useInView(0.5)
  
    return (
      <div ref={ref} className={`section-period ${inView ? 'in-view' : ''}`}>
        <div className="period-sub-text">Phần 2</div>
        <h2
          ref={ref}
          className={`period-main-text upd ${inView ? 'fade-up' : ''}`}
        >
          <span className="word visible">
            Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng của xã hội
          </span>
        </h2>
        <div className="period-sub-text p1-bottom p1">
          a. Vai trò quyết định của cơ sở hạ tầng đối với kiến trúc thượng tầng<br />
          b. Sự tác động trở lại của kiến trúc thượng tầng đối với cơ sở hạ tầng
        </div>
      </div>
    )
}

export default RelationshipTitle
