import useInView from "../hooks/useInview"
import React from "react"

const DefinitionTitle = () => {
  const [ref, inView] = useInView(0.5)

  return (
    <div ref={ref} className={`section-period ${inView ? 'in-view' : ''}`}>
      <div className="period-sub-text">Phần 1</div>
      <h2
        ref={ref}
        className={`period-main-text upd ${inView ? 'fade-up' : ''}`}
      >
        <span className="word visible">
          Khái niệm của cơ sở hạ tầng và kiến trúc thượng tầng của xã hội
        </span>
      </h2>
      <div className="period-sub-text p1-bottom p1">
        a. Khái niệm cơ sở hạ tầng<br />
        b. Khái niệm kiến trúc thượng tầng
      </div>
    </div>
  )
}

export default DefinitionTitle