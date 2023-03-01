import React from 'react';
import * as B from '../styles/HeadBar.style';
import Contact from './Contact';

export default function HeadBar() {
 
  return (
    <B.HeadBarContainer>
      
      <B.Header aria-label='logo'>정현우</B.Header>
      <Contact/>
    </B.HeadBarContainer>
    
  );
}

