module.exports = function (variants = ['responsive']) {
  return function ({ addUtilities }) {
    addUtilities([
      {
        '.rotate-0': {
          transform: 'rotate(0deg)',
        },
        '.rotate-15': {
          transform: 'rotate(15deg)',
        },
        '.rotate-30': {
          transform: 'rotate(30deg)',
        },
        '.rotate-45': {
          transform: 'rotate(45deg)',
        },
        '.rotate-90': {
          transform: 'rotate(90deg)',
        },
        '.rotate-180': {
          transform: 'rotate(180deg)',
        },
      },
    ], variants);
  };
};
