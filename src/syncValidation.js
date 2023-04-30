export const checkIsEmpty = (value) => {
  return value.trim() !== '';
};

export const checkEmail = (value) => {
  return (
    value.trim() !== '' &&
    value.toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
  );
};
