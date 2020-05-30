import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 180px;
  margin-bottom: 16px;

  ${({ overflow }) =>
    overflow &&
    `
    overflow: scroll;
  `}
`;
