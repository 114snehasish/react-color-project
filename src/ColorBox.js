import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className='ColorBox'>
          <div className='ColorBox-copy-container'>
            <div className='ColorBox-box-content'>
              <span>{name}</span>
            </div>
            <button className='ColorBox-copy-button'>Copy</button>
          </div>
          <span className='ColorBox-see-more'>more</span>
        </div>
      </CopyToClipboard>
    );
  }
}
