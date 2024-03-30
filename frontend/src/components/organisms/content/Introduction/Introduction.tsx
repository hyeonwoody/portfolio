
import React, {useState, useEffect} from 'react';
import P from '../../../atoms/Text/P/P';
import TypeIt from 'typeit-react';
export interface IntroductionProps {
    style : React.CSSProperties
    intro : string[],
    subIntro : string[]
}

const Introduction = (props : IntroductionProps) => {
    return (
        <section id='introduction' style={props.style}>
            <article id='introduction-article'>
                <P>저는</P>
                <TypeIt
                        aria-hidden='true'
                        options={{ loop: true}}
                        getBeforeInit = {(instance) => {
                            instance
                                .type(props.intro[0])
                                .pause(2000)
                                .delete('')
                                .pause(500)
                                .type(props.intro[1])
                                .pause(2000)
                                .delete('')
                                .pause(500)
                                .type(props.intro[2])
                                .pause(2000)
                                .delete('')
                                .pause(2000)
                                return instance;   
                        }}
                        >
                        </TypeIt>
            </article>
          </section>
        
    )
    
};

export default Introduction;