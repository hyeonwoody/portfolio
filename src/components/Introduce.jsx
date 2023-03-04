import React from 'react';
import TypeIt from 'typeit-react';
import * as I from '../styles/Introduce.style';
import profileImage from '../assets/images/westminster-798263.jpg'
export function Introduce () {
    const intro = [
        '받은것이 많아 베풀것이 많은',
        '모든 사람에게 도움이 되고 싶은',
        '인류의 정보 평준화를 너머 정보 상향 평준화를 위해 개발하는'
    ];

    return (
        <I.Container>
            <I.MainHeader>
                <I.ImageBox>
                    <I.ProfileImg
                        src={profileImage}
                        width='160'
                        height='180'
                        alt="first"
                    ></I.ProfileImg>
                </I.ImageBox>
                    <I.MainTitle>
                    <span>저는<br></br></span>
                    <I.TypeItBox>
                        <TypeIt
                        aria-hidden='true'
                        options={{ loop: true}}
                        
                        getBeforeInit = {(instance) => {
                            instance
                                .type(intro[0])
                                .pause(2000)
                                .delete('')
                                .pause(500)
                                .type(intro[1])
                                .pause(2000)
                                .delete('')
                                .pause(500)
                                .type(intro[2])
                                .pause(2000)
                                .delete('')
                                .pause(2000)
                                return instance;   
                        }}
                        >
                        </TypeIt>
                        </I.TypeItBox>
                        <span>정현우 </span>입니다.
                    </I.MainTitle>
            </I.MainHeader>
            <I.SubHeader>
                <I.SubList>
                    <li>
                        다양한 직군의 여러 동료와 협업하길 즐깁니다.
                    </li>
                    <li>
                        포기하지 않고 어떻게든 결과물을 만들어내는 프로그래밍을 지향합니다.
                    </li>
                    <li>
                        기술과 인문학의 균형을 이루는 개발자가 되기 위해 끊임없이 발전하고 있습니다.
                    </li>
                </I.SubList>
            </I.SubHeader>
        </I.Container>
    );
}

