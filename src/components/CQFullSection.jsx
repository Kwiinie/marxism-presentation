import React from 'react'
import HorizontalScrollSection from './HorizontalScrollSection';
import CQSection from './CQSection';
import CQQuestion from './CQQuestion';

const CQFullSection = () => {
   return (
     <HorizontalScrollSection sectionName="cq">
       <CQSection />
       <CQQuestion />
     </HorizontalScrollSection>
   );
 };
 
export default CQFullSection