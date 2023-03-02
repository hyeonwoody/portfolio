import React from 'react';
import styled from 'styled-components';

const Tab = ({ title, onClick, reducerStyle}) => {
    return (
        <TabButton onClick={onClick} style={reducerStyle}>
            {title}
        </TabButton>
    )
}

const TabButton = styled.button`
    padding: 10px;
    border: none;
    font-size: 20px;
    background-color: transparent;
`

export default Tab;