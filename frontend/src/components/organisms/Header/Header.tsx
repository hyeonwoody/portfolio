
import React from 'react';
import OrganismTitle from './Title'

import OrganismContactBox from '../box/ContactBox';
import {ContactBoxProps} from '../box/ContactBox';

import OrganismNavBar, { NavBarProps } from './NavBar';
interface HeaderProps{
    author: string,
    titleStyle : React.CSSProperties,
    menu: NavBarProps,
    contactBox : ContactBoxProps
    style? : React.CSSProperties
}

const Header = (props : HeaderProps) => {

    return (
        <header id="header" style={props.style}>
            <OrganismTitle text={ props.author} style={props.titleStyle}/>
            <OrganismContactBox style={props.contactBox.style} {...props.contactBox}></OrganismContactBox>
            <OrganismNavBar {...props.menu}></OrganismNavBar>
        </header>
    )
};
    

export default Header;