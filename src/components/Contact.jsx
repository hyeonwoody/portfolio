import React from 'react';
import styled from 'styled-components';
import * as color from '../styles/Colors';

export default function Contact(){
    return (
        <ContactBox>
            <span>Github</span>
      <span>tistory</span>
      <span>email</span>
        </ContactBox>
    );
}

const ContactBox = styled.div`
    position: fixed;

    right: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 0 50px;
    background-color: ${color.background};

    & > *:not (:last-child){
        padding-right: 15px;
    }

    & > *{
        color: ${color.subFont};
    }
    
`;