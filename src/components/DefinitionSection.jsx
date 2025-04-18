import React, { useEffect, useRef } from 'react'
import DefinitionTitle from './DefinitionTitle'
import DefinitionBase from './DefinitionBase'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DefinitionBaseTitle from './DefinitionBaseTitle'
import DefinitionBaseStructure from './DefinitionBaseStructure'
import DefinitionSuperstructure from './DefinitionSuperstructure'
import CQSection from './CQSection'
import RelationshipSection from './RelationshipSection'
import RelationshipB2S from './RelationshipB2S'
import RelationshipTitle from './RelationshipTitle'
import RelationshipS2B from './RelationshipS2B'
import RelationshipS2B1 from './RelationshipS2B1'
import RelationshipS2B2 from './RelationshipS2B2'
import CQQuestion from './CQQuestion'
import MeaningTitle from './MeaningTitle'
import Meaning from './Meaning'
import HorizontalScrollSection from './HorizontalScrollSection'


const DefinitionSection = () => {
  return (
    <HorizontalScrollSection sectionName="definition">
      <DefinitionTitle />
      <DefinitionBaseTitle />
      <DefinitionBaseStructure />
      <div className="definition-superstructure">
        <DefinitionSuperstructure />
      </div>
    </HorizontalScrollSection>
  );
};

 
export default DefinitionSection;