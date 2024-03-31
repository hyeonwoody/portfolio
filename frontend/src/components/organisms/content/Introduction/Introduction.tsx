
import React, {HTMLAttributes} from 'react';
import P from '../../../atoms/Text/P/P';
import TypeIt from 'typeit-react';

export interface IntroductionProps {
    contentSection : any,
    contentArticle : any,
    typeItBox : React.CSSProperties,
    intro : string[],
    subIntro : string[],
    subIntroStyle : any,
}

const Introduction = (props : IntroductionProps) => {
    return (       
            <props.contentSection className={"contentSection"}>
                <props.contentArticle className={"contentArticle"} id='introduction-article'>
                    <P>저는</P>
                    <div style={props.typeItBox} className={"contentTypeIt"}>
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
                    </div>
                    
                    <P><span>정현우 </span >입니다.</P>
                    <props.subIntroStyle>
                    {props.subIntro.map((intro, index) =>(
                        <li key={index}>{intro}</li>
                    ))}
                    </props.subIntroStyle>
                    {/* <ul style={props.subIntroStyle}>
                    
                    </ul> */}
                </props.contentArticle>
            </props.contentSection>
    )
    
};

export default Introduction;