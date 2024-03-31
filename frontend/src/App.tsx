
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import OrganismHeader, { HeaderProps } from './components/organisms/Header/Header';
import OrganismFooter from './components/organisms/Footer/Footer'

import Introduction from './pages/Introduction';
import Career from './pages/Career';


function App() {
  const myName = "정현우";
  const navBarData = {
      className : "header-navBar",
      menu : [
        {id : 0, title : '소개', link : '/', element : Introduction()},
        {id : 1, title : '경력기술서', link : '/career', element : Career()},
      ],
  };
  const contactData = {
    className : "contactBox",
    contacts : [
      {
        className: "github",
        aStyle : {
          href: "https://github.com/hyeonwoody",
          
        },
        svgStyle : {
            color : "#000000",
        },
      },
      {
        className: "velog",
        aStyle : {
          href: "https://velog.io/@hyeonwoody",
          
        },
        svgStyle : {
          color: "#17cf98",
        },
      },
      {
        className: "gmail",
        aStyle : {
          href: "mailto:hyeonwoody@gmail.com",
        },
        svgStyle : {
          color: "#d42011",
        },
      },
    ]
  }
  const Header : HeaderProps = {
    author : myName,
    titleStyle : { fontSize : '3rem' },
    menu : navBarData,
    contactBox : contactData,
    style : { position: 'fixed', top: 0, left:0, right:0, backgroundColor: 'transparent', borderBottom: '0.063rem solid'}
  }
  Header.contactBox.style = {position: 'absolute', top: '0.5rem', paddingBottom: '1rem'}
  Header.menu.style = {justifyContent: 'space-evenly', alignItems: 'center'}
  Header.menu.menuTextStyle = {fontSize : '2rem'}

  const FooterStyle : React.CSSProperties = { display: 'flex', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingBottom : '1rem'};
  return (
      
        <div className={"root"}>
          <BrowserRouter >
        <OrganismHeader {...Header}></OrganismHeader>
          <Routes>
            {Header.menu.menu.map ((menu) => (
              <Route path={menu.link} element={menu.element}></Route>
            ))}
          </Routes>
          <OrganismFooter style={FooterStyle} ></OrganismFooter>
          </BrowserRouter>
        </div>
        
      
    
  );
}

export default App;
