import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  border: ${({ theme }) => `1px solid ${theme.color.grey}`};
  ${({ focused, theme }) =>
    focused &&
    `
      border: 1.5px solid ${theme.color.main};
      padding: 11.5px;
  `}

  ${({ hasError, theme }) =>
    hasError &&
    `
      border: 1.5px solid ${theme.color.error};
      padding: 11.5px;
  `}
`;

export const InputField = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 16px;

  ::placeholder {
    color: ${({ theme }) => theme.color.greyDark};
  }
`;

export const InputTag = styled.span`
  display: inline-block;
  position: absolute;
  left: 12px;
  top: -12px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.color.mainDark};
  border-radius: 4px;
  padding: 2px 6px;
  color: #fff;
`;

export const styledIcon = (icon) => styled(icon)`
  color: ${({ theme }) => theme.color.grey};
  margin-right: 12px;
  transform: translateY(2px);
`;

export const InputError = styled.div`
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.error};
`;

export const InputAction = styled.span`
  height: 18px;
  border-left: 1px solid ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.main};
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  padding-left: 12px;
  margin-left: 8px;
`;
