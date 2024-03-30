import React from "react";
import Copyright from "./Copyright";
import {ContactBoxProps} from '../box/ContactBox';

import OrganismContactBox from '../box/ContactBox';


interface FooterProps{
    style? : React.CSSProperties,
    contactBox : ContactBoxProps
}

const Footer = (props : FooterProps) => {
    return (
        <footer id="footer" style={props.style}>
            <Copyright></Copyright>
        </footer>
    )
};
    

export default Footer;