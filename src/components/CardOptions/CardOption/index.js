import React from 'react';
import { Card, CardImage, CheckIconContainer, CheckIcon } from './style';
import Text from '../../Text';

export default ({ imgSrc, optionName, selected, handleClick }) => {
  return (
    <Card selected={selected} onClick={handleClick}>
      <CardImage src={imgSrc} alt={optionName} />
      <Text>{optionName}</Text>
      {selected && (
        <CheckIconContainer>
          <CheckIcon />
        </CheckIconContainer>
      )}
    </Card>
  );
};
