
import React from 'react';
import MoleculeTitle from '../../molecules/title/Title'

interface TitleProps {
    text: string, 
    style: React.CSSProperties;
}

const Title = (props : TitleProps) => {

    return (
        <MoleculeTitle name={props.text} style={{...props.style}}></MoleculeTitle>
    )
};

export default Title;