import chroma from 'chroma-js';
import sizes from './Sizes';

export const styles = {
  colorBox: {
    width: '20%',
    height: (props) => (props.showingFullColorPalette ? '25%' : '50%'),
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    margin: '0 auto -4px',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s',
      '-webkit-transition': '0.5s',
      '-moz-transition': '0.5s',
      '-ms-transition': '0.5s',
      '-o-transition': '0.5s',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: (props) => (props.showingFullColorPalette ? '20%' : '33%'),
    },
    [sizes.down('md')]: {
      width: '50%',
      height: (props) => (props.showingFullColorPalette ? '10%' : '20%'),
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: (props) => (props.showingFullColorPalette ? '5%' : '10%'),
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.07 ? 'white' : 'black',
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.07 ? 'white' : 'black',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '0.2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '80%',
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.07 ? '#d9d9d9' : '#383838',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    width: '40%',
    height: '1.4rem',
    marginLeft: '-20%',
    marginTop: '-0.7rem',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    lineHeight: '1.2rem',
    border: 'none',
    opacity: 0,
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
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    WebkitTransition: 'transform 0.6s ease-in-out',
    MozTransition: 'transform 0.6s ease-in-out',
    MsTransition: 'transform 0.6s ease-in-out',
    OTransition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
    WebkitTransform: 'scale(0.1)',
    MozTransform: 'scale(0.1)',
    MsTransform: 'scale(0.1)',
    OTransform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    WebkitTransform: 'scale(50)',
    MozTransform: 'scale(50)',
    MsTransform: 'scale(50)',
    OTransform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
    [sizes.down('xs')]: {
      transform: 'scale(100)',
      WebkitTransform: 'scale(100)',
      MozTransform: 'scale(100)',
      MsTransform: 'scale(100)',
      OTransform: 'scale(100)',
    },
  },
  copyMsg: {
    position: 'fixed',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    WebkitTransform: 'scale(0.1)',
    MozTransform: 'scale(0.1)',
    MsTransform: 'scale(0.1)',
    OTransform: 'scale(0.1)',
    opacity: '0',
    '& h1': {
      fontWeight: '200',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      textAlign: 'center',
      textShadow: '1px 2px black',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
      [sizes.down('xs')]: {
        fontSize: '5rem',
      },
    },
    '& p': {
      fontSize: '1.5rem',
      fontWeight: '100',
    },
  },
  showMsg: {
    opacity: '1',
    transform: 'scale(1)',
    WebkitTransform: 'scale(1)',
    MozTransform: 'scale(1)',
    MsTransform: 'scale(1)',
    OTransform: 'scale(1)',
    zIndex: '10',
    transition: 'all 0.4s ease-in-out',
    WebkitTransition: 'all 0.4s ease-in-out',
    MozTransition: 'all 0.4s ease-in-out',
    MsTransition: 'all 0.4s ease-in-out',
    OTransition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
};
