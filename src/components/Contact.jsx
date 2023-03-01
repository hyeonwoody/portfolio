import React from 'react';
import styled from 'styled-components';
import * as color from '../styles/Colors';
import Github from './svg/Github'
import Gmail from './svg/Gmail'
import Velog from './svg/Velog'
export default function Contact(){
    return (
        <ContactBox>
            <a href='https://github.com/hyeonwoody'
            target='_blank'
            rel='noopener noreferrer'>
                <Github size='30' color={color.blackForGit}></Github>
            </a>
            <a href='https://velog.io/@hyeonwoody'
            target='_blank'
            rel='noopener noreferrer'>
                <Velog size='30' color={color.greenForVelog}></Velog>
            </a>
            <a href='mailto:hyeonwoody@gmail.com'
            target='_blank'
            rel='noopener noreferrer'>
                <Gmail size='30' color={color.redForGmail}></Gmail>
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