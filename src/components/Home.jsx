import React, { useReducer } from 'react';
import HeadBar from './HeadBar';
import * as H from '../styles/Home.style';
import {changeMenu, initMenu} from '../store/MenuReducer';

export default function Home() {
  console.log("aHoffssme")
  const [state, dispatch] = useReducer (changeMenu, initMenu);

  function pain(){
    console.log("work")
  }
  return (
    <H.Container>
      <HeadBar state={state} dispatch={dispatch}/>
      {state.content}

      </H.Container>
  );
}
