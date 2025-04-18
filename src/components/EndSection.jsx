import React from 'react'
import useInView from '../hooks/useInview'
import HorizontalScrollSection from './HorizontalScrollSection'
import ThankyouSection from './ThankyouSection'

const EndSection = () => {

   return (
      <HorizontalScrollSection sectionName="end">
         <ThankyouSection />
      </HorizontalScrollSection>
   )
}

export default EndSection