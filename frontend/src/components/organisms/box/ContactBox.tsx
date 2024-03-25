import React from "react";

import SvgLinkGroup from '../../molecules/group/SvgLinkGroup'
import {SvgLink} from '../../molecules/group/SvgLinkGroup'

export interface ContactBoxProps{
    children?: React.ReactNode,
    className : string,
    contacts : SvgLink[]
}

const ContactBox = (props : ContactBoxProps) => {
    
    const links : SvgLink[] = [];

    if (props.contacts.length > 0){
        
        props.contacts.map ((contact)=>(
            
            links.push ({
                
                href: contact.href,
                color: contact.color,
                className: contact.className,
                size: contact.size,
            })
              
        ));
    }
    else {
        links.push({
            href: 'https://github.com/hyeonwoody',
            color: "#31abcd",
            className: props.className ? props.className : "GMAIL",
            size: props.contacts[0].size? props.contacts[0].size : 15,
          });
    }

    return (
        <div className="header-contactBox">
            <SvgLinkGroup links={links}></SvgLinkGroup>
        </div>
        
    );
    
};

export default ContactBox;