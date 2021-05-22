import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

export default class ColorBox extends Component {
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
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() > 0.07 ? false : true;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className='ColorBox'>
          <div
            style={{ background }}
            className={`ColorBox-copy-overlay ${copied && 'show'}`}
          />
          <div className={`ColorBox-copy-msg ${copied && 'show'}`}>
            <h1>Copied!!</h1>
            <p className={isDarkColor && 'light-text'}>{background}</p>
          </div>
          <div className='ColorBox-copy-container'>
            <div className='ColorBox-box-content'>
              <span className={isDarkColor && 'light-text'}>{name}</span>
            </div>
            <button
              className={`ColorBox-copy-button ${isDarkColor && 'light-text'}`}
            >
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span
                className={`ColorBox-see-more ${isDarkColor && 'light-text'}`}
              >
                more
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
