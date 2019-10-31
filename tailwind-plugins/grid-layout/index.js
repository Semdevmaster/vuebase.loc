// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('lodash');

module.exports = function ({ grids = _.range(1, 12), gaps = {}, variants = ['responsive'] }) {
  return function ({ e, addUtilities }) {
    addUtilities([
      {
        '.grid-container': {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          gridColumnGap: '1rem',
          gridRowGap: '1rem',
          gridAutoFlow: 'row',
          gridAutoRows: 'auto',
          gridAutoColumns: 'minmax(0, 1fr)',
        },
      },
      { '.grid': { display: 'grid' } },
      { '.inline-grid': { display: 'inline-grid' } },
      { '.grid-rows-dense': { gridAutoFlow: 'row dense' } },
      ...grids.map((columns) => ({
        [`.grid-columns-${columns}`]: {
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        },
      })),
      { '.grid-columns-auto-fit': { gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))' } },
      ...grids.map((rows) => ({
        [`.grid-rows-${rows}`]: {
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        },
      })),
      { '.grid-rows-auto-fit': { gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))' } },

      ..._.map(gaps, (size, name) => ({
        [`.${e(`grid-gap-${name}`)}`]: { gridGap: size },
      })),

      ..._.map(gaps, (size, name) => ({
        [`.${e(`grid-column-gap-${name}`)}`]: { gridColumnGap: size },
      })),

      ..._.map(gaps, (size, name) => ({
        [`.${e(`grid-row-gap-${name}`)}`]: { gridRowGap: size },
      })),

      ..._.range(1, _.max(grids) + 1).map((span) => ({
        [`.col-${span}`]: {
          gridColumnEnd: `span ${span}`,
        },
      })),
      ..._.range(1, _.max(grids) + 2).map((line) => ({
        [`.col-start-${line}`]: {
          gridColumnStart: `${line}`,
        },
        [`.col-end-${line}`]: {
          gridColumnEnd: `${line}`,
        },
      })),
      ..._.range(1, _.max(grids) + 1).map((span) => ({
        [`.row-${span}`]: {
          gridRowEnd: `span ${span}`,
        },
      })),
      ..._.range(1, _.max(grids) + 2).map((line) => ({
        [`.row-start-${line}`]: {
          gridRowStart: `${line}`,
        },
        [`.row-end-${line}`]: {
          gridRowEnd: `${line}`,
        },
      })),
    ], variants);
  };
};
