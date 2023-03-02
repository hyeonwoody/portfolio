import React from 'react';
import * as B from '../styles/HeadBar.style';
import Contact from './Contact';
import Tab from './Tab';

const HeadBar = ({state, dispatch}) => {
  console.log ("pain : ", dispatch);
  return (
    <B.Container>
      
      <B.Header aria-label='logo'>정현우</B.Header>
      <Contact/>
    <B.Navigation>
      <Tab
        title='소개'
        onClick={()=>{
          dispatch({menu:'INTRODUCE'})
        }}
        reducerStyle={state.introduceStyle}
        />
      <Tab
        title='기술'
        onClick={()=>{
          dispatch({menu:'STACK'})
        }}
        reducerStyle={state.stackStyle}
        />
      <Tab
        title='프로젝트'
        onClick={()=>{
          dispatch({menu:'PROJECT'})
        }}
        reducerStyle={state.projectStyle}
        />
    </B.Navigation>
    </B.Container>
  );
}

export default HeadBar;