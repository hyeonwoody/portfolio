
import React from 'react';
import Layout from '../components/templates/Introduction';
import Content from './Content';
import NavBar, { NavBarProps } from '../components/organisms/header/NavBar';
import { ContactBoxProps } from '../components/organisms/box/ContactBox';


export function Introduction (){
    const myName = "정현우";

    const navBarData : NavBarProps = {
        className : "introduction-header-navBar",
        menu : ["소개", "경력기술서", "자기소개서"]
    };
      const contactData : ContactBoxProps  = {
        className : "introduction-header-contactBox",
        contacts : [
          {
            className: "introduction-header-contactBox-github",
            aStyle : {
              href: "https://github.com/hyeonwoody",
              
            },
            svgStyle : {
                color : "#000000",
            },
          },
          {
            className: "introduction-header-contactBox-velog",
            aStyle : {
              href: "https://velog.io/@hyeonwoody",
              
            },
            svgStyle : {
              color: "#17cf98",
            },
          },
          {
            className: "introduction-header-contactBox-gmail",
            aStyle : {
              href: "mailto:hyeonwoody@gmail.com",
            },
            svgStyle : {
              color: "#d42011",
            },
          },
        ]
      }
    return (
            <Layout 
            Header={{ myName: myName, menu: navBarData, contants: contactData }} 
            Content={undefined} 
            Footer={undefined}            
            />
    )

} 

export default Introduction;