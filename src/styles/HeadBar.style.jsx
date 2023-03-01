import styled from 'styled-components';
import * as color from './Colors'



export const HeadBarContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${color.accent};
  z-index: 9999; //겹쳐놓기
  
`;

export const Header = styled.span`
  font-weight: 200;  
  font-size: 28px;
  color: ${color.font};
`;