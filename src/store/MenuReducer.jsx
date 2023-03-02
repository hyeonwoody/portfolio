import { Introduce } from '../components/Introduce';
import { Stack } from '../components/Stack';
import { Project } from '../components/Project';

import * as color from '../styles/Colors'



export const changeMenu = (state, action) => {
  switch (action.menu) {
    case 'INTRODUCE':
      return {
        introduceStyle: {color: color.accent, borderBottom: '1px solid '+color.black},
        stackStyle: {color: color.grey},
        projectStyle: {color: color.grey},
        render: <Introduce />,
      };
    case 'STACK':
      return {
        introduceStyle: {color: color.grey},
        stackStyle: {color: color.accent, borderBottom: '1px solid '+color.black},
        projectStyle: {color: color.grey},
        render: <Stack />,
      };
    case 'PROJECT':
      return {
        introduceStyle: {color: color.grey},
        stackStyle: {color: color.grey},
        projectStyle: {color: color.accent, borderBottom: '1px solid '+color.black},
        render: <Project />,
      };
    default:
      break;
  }
};

export const initMenu = {
  render: <Introduce />,
  introduceStyle: {color: color.accent, borderBottom: '1px solid '+color.black},
  stackStyle: {color: color.grey},
  projectStyle: {color: color.grey},
};

