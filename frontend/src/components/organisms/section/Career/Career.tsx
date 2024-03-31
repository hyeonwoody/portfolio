
import React, {useState,useRef, useEffect} from 'react';
import useIntersectionObserver from '../../../../utils/customHooks/useIntersectionObserver';

export interface CareerProps {
    contentSection : any,
    contentArticle : any,
    contentScroll : any,
}

const Career = (props : CareerProps) => {
    const [observe, unobserve] = useIntersectionObserver((e) => {
        console.log("ff");
        if (e.isIntersecting){
            (e.target as HTMLElement).style.opacity = '1';
        }
    });

    
    useEffect(()=> {
        const div = document.querySelectorAll('div');
        div.forEach ((div) => {
            observe(div);
        });
        return ()=>{
            div.forEach ((div) => {
                unobserve(div);
            });
        }
    })




    return (       
            <props.contentSection className={"contentSection"}>
                <props.contentArticle className={"contentArticle"} id='career-article'>
                <props.contentScroll><h3>아이폰 15</h3></props.contentScroll>
                <props.contentScroll><h3>충전포트를</h3></props.contentScroll>
                <props.contentScroll><h3>그래서 충전포트를 제거합니다</h3></props.contentScroll>
                <props.contentScroll/>
                </props.contentArticle>

            </props.contentSection>
    )
    
};

export default Career;