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
            className={`ColorBox-copy-overlay ${copied && "show"}`}
          />
          <div className={`ColorBox-copy-msg ${copied && "show"}`}>
            <h1>Copied!!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="ColorBox-copy-container">
            <div className="ColorBox-box-content">
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
