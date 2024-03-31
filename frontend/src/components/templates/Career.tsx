
import React, {useState, useEffect} from 'react';
import OrganismCareer from '../organisms/section/Career/Career'
import styled from 'styled-components';

export function Career (){


    const ContentSection = styled.section`

        min-width: 7rem;
        min-height: 75vh;
        margin-top : 6rem;
      `
    const ContentArticle = styled.article`
        font-family : "Nanum Gothic", sans-serif;
        font-weight: 600;
        justify-content: center;
        padding-top : 6rem;
    `

    const ContentScroll = styled.div`
        margin-top: 1000px;
        color: black;
        text-align: center;
        opacity : 0;
        transition : all 0.5s;

    `

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

    const handleScroll = () => {
	// 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if(window.scrollY >= 50){
      setScroll(true);
     
    }else{
    // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }

  };


    
    return (
      <div id='introduction-container' style={{marginTop : '6rem'}}>
          {/* <OrganismHeader style={HeaderStyle} {...{author : Header.myName, titleStyle : Header.titleStyle, menu : Header.menu, contactBox : Header.contacts}} /> */}
          
          <OrganismCareer contentSection={ContentSection} contentArticle={ContentArticle} contentScroll={ContentScroll}/>

          {/* <OrganismFooter style={FooterStyle} ></OrganismFooter> */}
          </div>
            
    )

} 

export default Career;