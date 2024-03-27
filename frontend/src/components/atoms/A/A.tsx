
import React from 'react';

interface AProps {
    children? : React.ReactNode,
    className? : string,
    href? :string,
    rel? :string,
    mouseEnter? : () =>void
    mouseLeave? : () =>void
}

const A = (props : AProps) => {

    return (
    <a className={props.className}
        target='_blank'
        href={props.href}
        rel="noopener noreferrer"
        onMouseEnter={props.mouseEnter}
        onMouseLeave={props.mouseLeave}
    >{props.children}</a>    
    )
};

export default A;