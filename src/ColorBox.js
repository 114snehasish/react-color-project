import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingFullColorPalette ? "25%" : "50%"),
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    margin: "0 auto -4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
      "-webkit-transition": "0.5s",
      "-moz-transition": "0.5s",
      "-ms-transition": "0.5s",
      "-o-transition": "0.5s",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.07 ? "white" : "black",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.07 ? "white" : "black",
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: "0.2rem",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "80%",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.07 ? "#d9d9d9" : "#383838",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    width: "40%",
    height: "1.4rem",
    marginLeft: "-20%",
    marginTop: "-0.7rem",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    lineHeight: "1.2rem",
    border: "none",
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
    transform: 'scale(10)',
    WebkitTransform: 'scale(10)',
    MozTransform: 'scale(10)',
    MsTransform: 'scale(10)',
    OTransform: 'scale(10)',
    zIndex: '10',
    position: 'absolute',
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
    },
    '& p': {
      fontSize: '1.5rem',
      fontWeight: '100',
    }
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

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 2000)
    );
  }

  render() {
    const { name, background, moreUrl, showingFullColorPalette, classes } =
      this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
          />
          <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
            <h1>Copied!!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="ColorBox-copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullColorPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>more</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
