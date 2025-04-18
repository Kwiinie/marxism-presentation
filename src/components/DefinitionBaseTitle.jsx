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
            <div className="content-1790 relative w-full flex flex-col items-center px-4 sm:px-6 md:px-8">
               <h3 className="section-main-heading s1790 top text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                  {words.map((word, i) => (
                     <span
                        key={i}
                        style={{
                           opacity: i <= visibleWords ? 1 : 0,
                           transition: 'opacity 0.3s',
                           display: 'inline-block',
                           marginRight: '0.2em',
                        }}
                     >
                        {word}{' '}
                     </span>
                  ))}
               </h3>

               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9e7db11de41aaa3388_IMG_1562%202.GIF"
                  loading="lazy"
                  alt=""
                  className="mark m1790 m1790-3 w-[30vw] max-w-xs"
               />

               <img
                  src="https://cdn.prod.website-files.com/667a818a880f892c0cfca58c/672cbe9ef2157b7ffb72d4d1_02.GIF"
                  loading="lazy"
                  alt=""
                  className="mark m1790 m1790-2"
                  style={{
                     position: 'absolute',
                     top: '15vh',
                     right: '10vw',
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
                     top: '-10vh',
                     right: '-5vw',
                     width: '10vh',
                     zIndex: 10,
                  }}
               />
            </div>

            <div
               className="w-full flex justify-center overflow-hidden transition-all duration-1000"
               style={{
                  maxHeight: showImage ? '600px' : '0',
               }}
            >
               <img
                  src="/relationship1.jpg"
                  alt="Wipe up reveal"
                  className="transition-transform duration-1000"
                  style={{
                     width: '50%',
                     transform: showImage ? 'translateY(0)' : 'translateY(100%)',
                  }}
               />
            </div>

            <div
               className="text-center px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl mt-8 transition-all duration-1000 mx-auto max-w-3xl leading-relaxed"
               style={{
                  opacity: showImage ? 1 : 0,
                  transform: showImage ? 'translateY(0)' : 'translateY(20px)',
                  color: '#333',
               }}
            >
               Là toàn bộ những quan hệ sản xuất của một xã hội trong sự vận động hiện thực của chúng hợp thành cơ cấu kinh tế của xã hội đó. Cơ sở hạ tầng được hình thành một cách khách quan trong quá trình sản xuất vật chất của xã hội.
            </div>
         </div>
      </div>

   )
}

export default DefinitionBaseTitle
