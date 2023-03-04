import React from 'react';
import TypeIt from 'typeit-react';
import * as I from '../styles/Introduce.style';

export function Introduce () {
    const intro = [
        '받은것이 많아 베풀것이 많은',
        '모든 사람에게 도움이 되고 싶은',
        '인류의 정보 평준화를 너머 정보 상향 평준화를 위해 개발하는'
    ];

    return (
        <I.MainHeader>
            <p>인트로를 썼는데요<br></br></p>
        </I.MainHeader>
    );
}