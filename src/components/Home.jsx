import React from 'react';
import HeadBar from './HeadBar';
import * as H from '../styles/Home.style';
import { Introduce } from './Introduce';

export default function Home() {
  console.log("aHoffssme")
  return (
    <div>
      
      <HeadBar/>
      <Introduce />
      
      </div>
  );
}
