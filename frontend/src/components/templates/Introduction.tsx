import React from 'react';
import OrganismHeader from '../organisms/Header/Header';
import OrganismFooter from '../organisms/Footer/Footer'
import OrganismContent from '../organisms/content/Introduction/Introduction'
import ContactBox, { ContactBoxProps } from '../organisms/box/ContactBox';
import { NavBarProps } from '../organisms/Header/NavBar';
import '../atoms/Text/Family/Family.css';

import styled from 'styled-components'
import { accent, subAccent } from '../../styles/Colors';

interface IntroductionLayoutProps{
  Header : {
    myName : string,
    titleStyle? : React.CSSProperties,
    menu : NavBarProps,
    contacts : ContactBoxProps,
  }
  Content : {
    intro : string[],
    subIntro : string[],
    subIntroStyle? : React.CSSProperties,
  }
  Footer : {

  } | undefined
}

export default function Layout({Header , Content, Footer, ...props} : IntroductionLayoutProps) {
      
      const onClickMenu = ()=> {

      }

      Header.menu.onClick = onClickMenu;

      const MainContainer : React.CSSProperties = {
        display : 'flex',
        flexDirection: 'column',
      }

      const HeaderStyle : React.CSSProperties = { position: 'fixed', top: 0, left:0, right:0, backgroundColor: 'transparent', borderBottom: '0.063rem solid'};
      Header.titleStyle = { fontSize : '3rem' }
      Header.contacts.style = {position: 'absolute', top: '0.5rem', right: '1rem', paddingBottom: '1rem'}

      Header.menu.style = { display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}
      Header.menu.menuTextStyle = {fontSize : '2rem'}

      const ContentSection = styled.section`
        align-items: center;
        min-width: 7rem;
        min-height: 75vh;
        margin-top : 6rem;
        &:hover {
          animation: vision 2s;
          @keyframes vision {
            from {
              -webkit-filter:blur(0.5rem);
            }
            to {
              -webkit-filter:blur(0rem);
            }
          }
        }
      `

      const ContentArticle = styled.article`
        font-family : "Nanum Gothic", sans-serif;
        font-size: 3rem;
        font-weight: 500;
        padding-top : 10rem;
        display : grid;
        justify-content: center;
      & > p:nth-child(3) { //Accent 
        & > span:first-child {
          opacity : 1;
        background: 
        linear-gradient(to right, ${accent}, ${subAccent});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;
        cursor: default;
        &:hover {
          opacity: 1;
          transition: all 0.3s ease-in-out;
          -webkit-mask-image: linear-gradient(
            -75deg,
            rgba(0, 0, 0, 0.6) 10%,
            #000 50%,
            rgba(0, 0, 0, 0.6) 90%
          );
          -webkit-mask-size: 200%;
          animation: glow 2s infinite;
        }
        @keyframes glow {
          from {
            -webkit-mask-position: 400%;
          }
          to {
            -webkit-mask-position: -400%;
          }
        },
        }
      }
      `

      const TypeItBox : React.CSSProperties = {
        borderBottom: '2px solid grey',
        height: '4rem',
        width : '82rem',
        paddingBottom : '0rem'
      }

      const SubIntroStyle = styled.ul`
        font-size: 2rem;
        font-weight: 600;
        list-style: none;
        padding-left: 0rem;
          & > * {
            border-left: 0.3rem solid ${subAccent};
            margin:0 0.3rem 2rem;
            padding-left: 1rem;
          }
      `

      const FooterStyle : React.CSSProperties = { display: 'flex', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingBottom : '1rem'};
      return (
          <div id='introduction-container' style={MainContainer}
          >
          <OrganismHeader style={HeaderStyle} {...{author : Header.myName, titleStyle : Header.titleStyle, menu : Header.menu, contactBox : Header.contacts}} />
          
          <OrganismContent contentSection={ContentSection} contentArticle={ContentArticle} {...{typeItBox : TypeItBox, intro : Content?.intro, subIntro : Content?.subIntro, subIntroStyle : SubIntroStyle}} />

          <OrganismFooter style={FooterStyle} {...{contactBox : Header.contacts}}></OrganismFooter>
        </div>
      )
};

