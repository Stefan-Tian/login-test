import styled from 'styled-components';
import { customMargin } from '../../utils/styles';

export default styled.div`
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          font-size: 14px;
          line-height: 1.6;
        `;
      case 'lg':
        return `
          font-size: 18px;
        `;
      default:
        return `
          font-size: 16px;
        `;
    }
  }}

  ${({ color, theme }) => {
    switch (color) {
      case 'main':
        return `
          color: ${theme.color.main};
        `;
      case 'greyDark':
        return `
          color: ${theme.color.greyDark};
        `;
      case 'greyDarkExtreme':
        return `
          color: ${theme.color.greyDarkExtreme};
        `;
      default:
        return `
          color: ${theme.color.dark};
        `;
    }
  }}

  ${({ clickable }) =>
    clickable &&
    `
    cursor: pointer;
  `}

${({ align }) =>
  align &&
  `
    text-align: ${align};
  `}

  ${({ mt, mr, mb, ml }) => customMargin(mt, mr, mb, ml)}
`;
