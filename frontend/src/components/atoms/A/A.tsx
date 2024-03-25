
import React from 'react';

interface AProps {
    children? : React.ReactNode,
    className? : string,
    key? :string,
    href? :string,
    rel? :string,
}

const A = (props : AProps) => {
    const myStyle ={
        fontFamily: 'Kotra',
        fontSize: '40px',
    }

    return (
    <a className={props.className}
        key={props.key}
        target='_blank'
        href={props.href}
        rel="noopener noreferrer"
    >{props.children}</a>    
    )
};

A.defaultProps ={
    children: '',
    className: ''
}

export default A;