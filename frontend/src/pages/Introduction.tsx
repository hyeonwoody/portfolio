
import React from 'react';
import Layout from '../components/templates/Introduction';
import Content from './Content';
import NavBar, { NavBarProps } from '../components/organisms/Header/NavBar';
import { ContactBoxProps } from '../components/organisms/box/ContactBox';


export function Introduction (){
    const myName = "정현우";

    const navBarData : NavBarProps = {
        className : "introduction-header-navBar",
        menu : ["소개", "경력기술서"]
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

    const contentData = {
      intro : [
        '받은것이 많아 베풀것이 많은',
        '모든 사람에게 도움이 되고 싶은',
        '인류의 정보 평준화를 너머 정보 상향 평준화를 위해 개발하는'
      ],
      subIntro : [
        '다양한 직군의 여러 동료와 협업하길 즐깁니다.',
        '포기하지 않고 어떻게든 결과물을 만들어내는 프로그래밍을 지향합니다.',
        '기술과 인문학의 균형을 이루는 개발자가 되기 위해 끊임없이 발전합니다.'
      ]
    }
    return (
            <Layout 
            Header={{ myName: myName, menu: navBarData, contacts: contactData }} 
            Content={contentData} 
            Footer={undefined}            
            />
    )

} 

export default Introduction;