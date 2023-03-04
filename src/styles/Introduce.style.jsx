import styled from 'styled-components';
import * as color from './Colors'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  justify-content: center;
  min-height: 80vh;
  font-family: 'Gothic';
  font-weight: 600;
  -webkit-filter:blur(0.5px);
`;
export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  font-weight: 300;
  flex-shrink: 0;
  margin: 115px 10% 10px;
  border-radius: 10px;
  padding: 2px;
`;

export const ImageBox = styled.div`
  position: relative;
  width : 160;
  height: 180;
  margin: 0px 20px;
`;
  export const ProfileImg = styled.img`
    border-radius: 20px;
    object-fit: cover;
    background-color : #FFF;
  `;

export const MainTitle = styled.div`
  align-items: center;
  min-width: 950px;
  display: block;
  
  font-size: 35px;
  font-weight: 600;
 
  &:hover {
    animation: vision 2s;
    @keyframes vision {
      from {
        -webkit-filter:blur(0.7px);
      }
      to {
        -webkit-filter:blur(0px);
      }
    }
  }
  & > span:nth-child(3) {
    opacity : 1;
    background: 
    linear-gradient(to right, ${color.accent}, ${color.subAccent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    cursor: default;
    &:hover {
      opacity: 1;
      transition: all 0.3s ease-in-out;
      -webkit-mask-image: linear-gradient(
        -75deg,
        rgba(0, 0, 0, 0.6) 10%,
        #000 50%,
        rgba(0, 0, 0, 0.6) 90%
      );
      -webkit-mask-size: 200%;
      animation: glow 2s infinite;
    }
    @keyframes glow {
      from {
        -webkit-mask-position: 400%;
      }
      to {
        -webkit-mask-position: -400%;
      }
    }
  }
`;

export const TypeItBox = styled.div`

  border-bottom: 2px solid ${color.grey};
  height: 48px;
  font-size: 35px;
`;



export const SubHeader = styled.div`
  padding: 10px;
  left: 0px;
`

export const SubList = styled.ul`
font-size: 20px;
font-weight: 600;
list-style: none;
/* padding: 5%; */

  & > * {
    border-left: 3px solid ${color.subAccent};
    margin:0 3px 15px;
    padding-left: 8px;
  }
`