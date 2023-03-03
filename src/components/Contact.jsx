import React, { useReducer } from 'react';
import styled from 'styled-components';
import * as color from '../styles/Colors';
import Github from './svg/Github'
import Gmail from './svg/Gmail'
import Velog from './svg/Velog'
import { changeIconColor, initIconColor } from '../store/ContactReducer';

export default function Contact(){
    const [state, dispatch] = useReducer (changeIconColor, initIconColor);
    return (
        <ContactBox>
            <a href='https://github.com/hyeonwoody'
            target='_blank'
            onMouseEnter={() => {
                dispatch({ type: 'GITHUB' });
              }}
              onMouseLeave={() => {
                dispatch({ type: 'DEFAULT' });
              }}
            rel='noopener noreferrer'>
                <Github size='30' color={state.githubColor}></Github>
            </a>
            <a href='https://velog.io/@hyeonwoody'
            target='_blank'
            onMouseEnter={() => {
                dispatch({ type: 'VELOG' });
              }}
              onMouseLeave={() => {
                dispatch({ type: 'DEFAULT' });
              }}
            rel='noopener noreferrer'>
                <Velog size='30' color={state.velogColor}></Velog>
            </a>
            <a href='mailto:hyeonwoody@gmail.com'
            target='_blank'
            onMouseEnter={() => {
                dispatch({ type: 'GMAIL' });
              }}
              onMouseLeave={() => {
                dispatch({ type: 'DEFAULT' });
              }}
            rel='noopener noreferrer'>
                <Gmail size='30' color={state.gmailColor}></Gmail>
            </a>
            
        </ContactBox>
    );
}

const ContactBox = styled.div`
    position: fixed;
    top : 8px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items : center;
    
    

    & > *:not (:last-child){
        padding-right: 50px;
    }
    
`;