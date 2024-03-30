import React, {useEffect, useState} from "react";

import SvgLinkBond from '../../molecules/bond/SvgLinkBond'
import {SvgLink} from '../../molecules/bond/SvgLinkBond'
import { subFont } from "../../../styles/Colors";


export interface ContactBoxProps{
    children?: React.ReactNode,
    className : string,
    contacts : SvgLink[]
    style? : React.CSSProperties
}

const ContactBox = (props : ContactBoxProps) => {
    const [color, setColor] = useState<string[]>([]);
    const initialColors = Array(props.contacts.length).fill(subFont);
    console.log("Contact",props.style)
    useEffect(()=> {
        const initialColors = Array(props.contacts.length).fill(subFont);
        setColor(initialColors);
    }, [props.contacts]);

    const onMouseEnter = (index : number) => {  
        setColor( (prevState) => {
            const updatedColor = [...prevState];
            updatedColor[index] = props.contacts[index].svgStyle.color;
            return updatedColor;
        });    
    }
    const onMouseLeave = () => {
        setColor(initialColors);
    }

    const links : SvgLink[] = [];

    if (props.contacts.length > 0){
        
        props.contacts.map ((contact, index)=>(
            
            links.push ({
                className: contact.className,
                aStyle : {
                    href: contact.aStyle? contact.aStyle.href : '',
                    
                },
                svgStyle : {
                    color : color[index],
                    size: contact.svgStyle? contact.svgStyle.size : 15,
                    
                },
                onMouseEnter : ()=> onMouseEnter(index),
                onMouseLeave : ()=> onMouseLeave(),
            })
        ));
    }
    else {
        links.push({
            className: props.className ? props.className : "github",
            aStyle : {
                href: 'https://github.com/hyeonwoody'
            },
            color: "#31abcd",
            svgStyle : {
                color : "3abcd",
                size: 15,
            },
          });
    }

    return (
        <div className="header-contactBox" style={props.style}>
            <SvgLinkBond links={links}
            ></SvgLinkBond>
        </div>
        
    );
    
};

export default ContactBox;