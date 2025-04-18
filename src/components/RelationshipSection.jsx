import React, { useEffect, useRef } from 'react'
import RelationshipTitle from './RelationshipTitle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import RelationshipB2S from './RelationshipB2S';
import HorizontalScrollSection from './HorizontalScrollSection';
import RelationshipS2B from './RelationshipS2B';
import RelationshipS2B1 from './RelationshipS2B1';
import RelationshipS2B2 from './RelationshipS2B2';

const RelationshipSection = () => {
   return (
     <HorizontalScrollSection sectionName="relationship">
       <RelationshipTitle />
       <RelationshipB2S />
       <RelationshipS2B />
       <RelationshipS2B1 />
       <RelationshipS2B2 />
     </HorizontalScrollSection>
   );
 };
 

export default RelationshipSection;