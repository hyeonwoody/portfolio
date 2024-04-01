
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
                    
                <props.contentScroll><h3>정현우</h3></props.contentScroll>
                <props.contentScroll><h3>경력이 없다고요?</h3></props.contentScroll>
                <props.contentScroll><h3>그래서 한 회사에서 한 작업을 자세히 적습니다.</h3></props.contentScroll>
                <props.contentScroll/>
                </props.contentArticle>

            </props.contentSection>
    )
    
};

export default Career;