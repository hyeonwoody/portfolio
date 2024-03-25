
import React from 'react';
import MoleculeTitle from '../molecules/title/Title'

interface TitleProps {
    text: string, 
    size: number
}

const Title = (props : TitleProps) => {
    return (
        <MoleculeTitle name={props.text} size={props.size}></MoleculeTitle>
    )
};

export default Title;