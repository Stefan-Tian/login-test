import styled from 'styled-components';
import { CheckOutlined } from '@ant-design/icons';

export const Card = styled.div`
  border: ${({ theme }) => `1px solid ${theme.color.grey}`};
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  flex: 1;
  height: 160px;

  :not(:last-of-type) {
    margin-right: 16px;
  }

  ${({ selected, theme }) =>
    selected &&
    `
    border-color: ${theme.color.mainLight}
  `}
`;

export const CardImage = styled.img`
  margin-bottom: 12px;
`;

export const CheckIconContainer = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.color.mainDark};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -8px;
  right: -8px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => `0px 1.2px 3px 1px ${theme.color.mainLight}`};
`;

export const CheckIcon = styled(CheckOutlined)`
  font-size: 14px;
  color: #fff;
`;
