const formatNumber = (num) => {
  if (num > 10) return `0${num}`;

  return num;
};

export default formatNumber;
