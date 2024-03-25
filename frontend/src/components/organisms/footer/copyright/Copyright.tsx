
import React from 'react';

interface CopyrightProps{
    year : number
}

const Copyright = (props : CopyrightProps) => (
    <p>©{props.year}. Hyeonwoo Jung. All rights reserved.</p>
);

export default Copyright;