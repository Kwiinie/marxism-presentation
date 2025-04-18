import React, { useEffect, useState } from 'react'
import useInView from '../hooks/useInview'

const DefinitionBaseTitle = () => {
   const [ref, inView] = useInView(0.5)
   const [visibleWords, setVisibleWords] = useState(0)
   const [showImage, setShowImage] = useState(false)

   const words = ['KHÁI', 'NIỆM', 'CƠ', 'SỞ', 'HẠ', 'TẦNG']

   useEffect(() => {
      if (inView) {
         setVisibleWords(0)
         const wordInterval = setInterval(() => {
            setVisibleWords(prev => {
               if (prev >= words.length - 1) {
                  clearInterval(wordInterval)
               }
               return prev + 1
            })
         }, 100)
         return () => clearInterval(wordInterval)
      }
   }, [inView])

   // Show image when inView (separate from word animation)
   useEffect(() => {
      if (inView) {
         setShowImage(true)
      } else {
         setShowImage(false) // hide when scroll out
      }
   }, [inView])
   return (
      <div ref={ref}>
         <div className={`section-1790 ${inView ? 'in-view' : ''}`}>
            <div className="content-1790">
               <h3 className="section-main-heading s1790 top">
                  {words.map((word, i) => (
                     <span key={i} style={{ opacity: i <= visibleWords ? 1 : 0, transition: 'opacity 0.3s' }}>
                        {word}{' '}
                     </span>
                  ))}
               </h3>

               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9e7db11de41aaa3388_IMG_1562%202.GIF"
                  loading="lazy"
                  alt=""
                  className="mark m1790 m1790-3"
               />
               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9ef2157b7ffb72d4d1_02.GIF"
                  loading="lazy"
                  alt=""
                  className="mark m1790 m1790-2"
                  style={{
                     position: 'absolute',
                     top: '15vh',     // move higher
                     right: '75vh',   // move further right
                     width: '7vh',
                     zIndex: 10,
                  }}
               />
               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9e4b4768e7dbe38394_IMG_1581.GIF"
                  loading="lazy"
                  alt=""
                  className="mark m1790 m1790-1"
                  style={{
                     position: 'absolute',
                     top: '-10vh',     // move higher
                     right: '-8vh',   // move further right
                     width: '10vh',
                     zIndex: 10,
                  }}
               />
            </div>

            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  maxHeight: showImage ? '600px' : '0',
                  transition: 'max-height 1s ease',
               }}
            >
               <img
                  src="/relationship1.jpg"
                  alt="Wipe up reveal"
                  style={{
                     width: '50%',
                     height: 'auto', // or a fixed value like '300px'
                     transform: showImage ? 'translateY(0)' : 'translateY(100%)',
                     transition: 'transform 1s ease',
                     margin: '0 auto' // center the image
                  }}

               />
            </div>
            <div
               style={{
                  opacity: showImage ? 1 : 0,
                  transform: showImage ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 1s ease, transform 1s ease',
                  textAlign: 'center',
                  marginTop: '2rem',
                  padding: '0 2rem',
                  fontSize: '1.25rem',
                  maxWidth: '800px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  color: '#333',
                  lineHeight: 1.6,
               }}
            >
               Là toàn bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực của chúng hợp thành cơ cấu kinh tế của xã hội đó. Cơ sở hạ tầng được hình thành một cách khách quan trong quá trình sản xuất vật chất của xã hội.
            </div>
         </div>
      </div>
   )
}

export default DefinitionBaseTitle
