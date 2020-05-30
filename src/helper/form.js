export const checkValidPassword = (email, password) => {
  if (!email || !password) {
    return false;
  }

  const commonString = [email, password].reduce((accum, current) => {
    let i = 0;
    while (accum[i] && current[i] && accum[i] === current[i]) {
      i++;
    }

    return accum.slice(0, i);
  });

  return commonString.length < 6 ? true : false;
};
