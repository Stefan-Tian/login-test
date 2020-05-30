import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;
  padding: 24px 24px 0 24px;
  max-width: 560px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-image: url(${process.env.PUBLIC_URL + '/town.svg'});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
