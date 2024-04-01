
import React from 'react';
import OrganismTitle from './Title'

import OrganismContactBox from '../box/ContactBox';
import {ContactBoxProps} from '../box/ContactBox';

import OrganismNavBar, { NavBarProps } from './NavBar';
import usehtml2pdf from '../../../utils/customHooks/useHtml2Pdf';
import Button from '../../atoms/Button/Button';
export interface HeaderProps{
    author: string,
    titleStyle : React.CSSProperties,
    menu: NavBarProps,
    contactBox : ContactBoxProps,
    style? : React.CSSProperties,
}

const Header = (props : HeaderProps) => {
    const {convertToPDF} = usehtml2pdf('header');
    const handleConvertClick = () =>{
        convertToPDF();
    }

    return (
        <header className="header" id="header" style={props.style}>
            
            <OrganismTitle text={ props.author} style={props.titleStyle}/>
            <OrganismContactBox style={props.contactBox.style} {...props.contactBox}></OrganismContactBox>
            <Button onClick={handleConvertClick} style={{borderTop : '1px solid', width: '7rem', height: '3rem'}}>PDF로 저장하기</Button>
            <OrganismNavBar {...props.menu}></OrganismNavBar>
        </header>
    )
};
    

export default Header;