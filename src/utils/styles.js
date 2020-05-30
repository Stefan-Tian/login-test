export const customMargin = (
  marginTop,
  marginRight,
  marginBottom,
  marginLeft
) => {
  let result = ``;

  if (marginTop) {
    result += `margin-top: ${marginTop};`;
  }

  if (marginRight) {
    result += `margin-right: ${marginRight};`;
  }

  if (marginBottom) {
    result += `margin-bottom: ${marginBottom};`;
  }

  if (marginLeft) {
    result += `margin-left: ${marginLeft};`;
  }

  return result;
};
