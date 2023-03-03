import * as color from '../styles/Colors';

export const initIconColor = {
  githubColor: color.subFont,
  velogColor: color.subFont,
  gmailColor: color.subFont,
  telColor: color.subFont,
};

export const changeIconColor = (state, action) => {
    console.log ("here")
  switch (action.type) {
    case 'GITHUB':
      return {
        ...state,
        githubColor: color.Git,
      };
    case 'VELOG':
      return {
        ...state,
        velogColor: color.Velog,
      };
    case 'GMAIL':
      return {
        ...state,
        gmailColor: color.Gmail,
      };
    case 'DEFAULT':
      return {
        ...initIconColor,
      };
    default:
      break;
  }
};