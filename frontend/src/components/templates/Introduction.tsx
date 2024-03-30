import React from 'react';
import OrganismHeader from '../organisms/Header/Header';
import OrganismFooter from '../organisms/Footer/Footer'
import OrganismContent from '../organisms/content/Introduction/Introduction'
import ContactBox, { ContactBoxProps } from '../organisms/box/ContactBox';
import { NavBarProps } from '../organisms/Header/NavBar';
import { whiteGrey, grey } from '../../styles/Colors';

interface IntroductionLayoutProps{
  Header : {
    myName : string,
    titleStyle? : React.CSSProperties,
    menu : NavBarProps,
    contacts : ContactBoxProps,
  }
  Content : {
    intro : string[],
    subIntro : string[]
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

      const ContentStyle : React.CSSProperties = {
        fontSize : '3rem',
        paddingTop : '6rem',
      }
      
      const FooterStyle : React.CSSProperties = { display: 'flex', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingBottom : '1rem'};
      return (
          <div id='introduction-container' style={MainContainer}
          >
          <OrganismHeader style={HeaderStyle} {...{author : Header.myName, titleStyle : Header.titleStyle, menu : Header.menu, contactBox : Header.contacts}} />
          
          <OrganismContent style={ContentStyle} {...{intro : Content?.intro, subIntro : Content?.subIntro}} />

          <OrganismFooter style={FooterStyle} {...{contactBox : Header.contacts}}></OrganismFooter>
        </div>
      )
};

