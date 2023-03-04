import styled from 'styled-components';
import * as color from './Colors'



export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${color.white};
  z-index: 9999;
  border-bottom: 1px solid ${color.grey};
  
`;

export const Header = styled.span`
  font-weight: 400;  
  font-size: 28px;
  flex-shrink : 0;
  color: ${color.font};
`;


export const Navigation = styled.nav`
  display: flex;
  justify-content : space-evenly;
  align-items: center;
  font-family: 'Black';

`