import React from 'react';
import CardOption from './CardOption';
import { CardsContainer } from './style';

export default ({ options, selected, changeAccountType }) => {
  const overflow = options.length > 2 ? 1 : 0;

  return (
    <CardsContainer overflow={overflow}>
      {options.map((option) => {
        let isSelected = option.optionName === selected ? true : false;
        return (
          <CardOption
            key={option.optionName}
            {...option}
            selected={isSelected}
            handleClick={() => changeAccountType(option.optionName)}
          />
        );
      })}
    </CardsContainer>
  );
};
