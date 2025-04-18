import React from 'react'
import HorizontalScrollSection from './HorizontalScrollSection';
import MeaningTitle from './MeaningTitle';
import Meaning from './Meaning';

const MeaningSection = () => {
   return (
     <HorizontalScrollSection sectionName="meaning">
       <MeaningTitle />
       <Meaning />
     </HorizontalScrollSection>
   );
 };

export default MeaningSection
