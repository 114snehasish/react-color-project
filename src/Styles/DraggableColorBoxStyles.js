import chroma from 'chroma-js';

import sizes from './Sizes';

export const styles = {
  root: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    margin: '0 auto -6px',
    '&:hover svg': {
      color: '#eeeeee',
      transform: 'scale(1.2)',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%',
    },
  },
  boxContent: {
    position: 'absolute',
    padding: '0.5em',
    width: '100%',
    boxSizing: 'border-box',
    bottom: '0',
    left: '0',
    letterSpacing: '0.2em',
    fontSize: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: (props) =>
      chroma(props.color.color).luminance() <= 0.08
        ? 'rgba(255,255,255,0.8)'
        : 'rgba(0,0,0,0.6)',
  },
  deleteIcon: {
    transition: 'all 0.3s ease',
  },
  colorName: {
    maxWidth: '80%',
    overflow: 'hidden',
  },
};
