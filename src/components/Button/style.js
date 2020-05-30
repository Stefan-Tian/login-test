import styled from 'styled-components';

export default styled.button`
  outline: none;
  border: 0;
  background-color: ${({ theme }) => theme.color.mainDark};
  color: #fff;
  padding: 10px 24px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
`;
