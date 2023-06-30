module.exports = {
  sm: { max: '32Opx' },
  // => @media (max-width: 320px) { ... }

  md: { min: '320px', max: '379px' },
  // => @media (min-width: 320px and max-width: 379px) { ... }

  lg: { min: '380px', max: '419px' },
  // => @media (min-width: 380px and max-width: 419px) { ... }

  xl: { min: '420px', max: '480px' },
  // => @media (min-width: 420px and max-width: 480px) { ... }
};
