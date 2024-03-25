import React from 'react';
import OrganismHeader from '../organisms/Header';
import Copyright from '../organisms/footer/copyright/Copyright';
import { ContactBoxProps } from '../organisms/box/ContactBox';

export default function Layout() {
      const myName = "정현우";
      const inputMenu = ["경력소개서", "자기소개서"];
      const ContactContext : ContactBoxProps = {
        className : "introduction-header-contactBox",
        contacts : [
          {
            href: "https://github.com/hyeonwoody",
            color: "#000000",
            className: "introduction-header-contactBox-github",
            size : 30,
          },
          {
            href: "https://velog.io/@hyeonwoody",
            color: "#17cf98",
            className: "introduction-header-contactBox-velog",
            size : 30,
          },
          {
            href: "mailto:hyeonwoody@gmail.com",
            color: "#d42011",
            className: "introduction-header-contactBox-gmail",
            size : 30,
          },
        ]
      }
      return (
          <div id='introduction-container'>
          <OrganismHeader {...{author : myName, menu :inputMenu, contactBox : ContactContext}}/>
          <section id='introduction'>
            <article id='introduction-article'>
            </article>
          </section>
          <footer></footer>
        </div>

        
        
      )
};

