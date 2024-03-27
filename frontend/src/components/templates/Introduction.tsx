import React from 'react';
import OrganismHeader from '../organisms/header/Header';
import { ContactBoxProps } from '../organisms/box/ContactBox';
import { NavBarProps } from '../organisms/header/NavBar';

interface IntroductionLayoutProps{
  Header : {
    myName : string,
    menu : NavBarProps,
    contants : ContactBoxProps,
  }
  Content : {
    
  } | undefined
  Footer : {

  } | undefined
}

export default function Layout({Header , Content, Footer, ...props} : IntroductionLayoutProps) {
      
      const onClickMenu = ()=> {

      }

      Header.menu.onClick = onClickMenu;

      const HeaderStyle = { Position: 'fixed', left:0, right:0, backgroundColor: 'white' };
      Header.contants.style = {position: 'fixed', top: '8px', right: '20px', paddingBottom: '20px'}
      Header.menu.style = { display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}
      
      return (
          <div id='introduction-container'>
          <OrganismHeader style={HeaderStyle} {...{author : Header.myName, menu : Header.menu, contactBox : Header.contants}} />
          <section id='introduction'>
            <article id='introduction-article'>
            </article>
          </section>
          <footer></footer>
        </div>
      )
};

