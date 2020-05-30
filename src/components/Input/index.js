import React from 'react';
import {
  InputContainer,
  InputTag,
  InputField,
  InputAction,
  InputError,
} from './style';

export default ({ Icon, focused, action, error, ...rest }) => {
  const hasError = error.length > 0;
  return (
    <InputContainer focused={focused} hasError={hasError}>
      {focused && <InputTag>{rest.name}</InputTag>}
      <Icon />
      <InputField {...rest} hasAction={action ? true : false} />
      {action && (
        <InputAction onClick={action.onClick} hasError={hasError}>
          {action.name}
        </InputAction>
      )}
      {hasError && <InputError>{error}</InputError>}
    </InputContainer>
  );
};
