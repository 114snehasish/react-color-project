import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    const { palette, colorId } = this.props;
    this._shades = this.gatherShades(palette, colorId);
  }
  gatherShades(palette, colorId) {
    let shades = [];
    // return all shades of given color
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((shade) => shade.id === colorId)
      );
    }
    return shades.slice(1);
  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showLink={false}
      />
    ));
    return (
      <div className='Palette'>
        <h2>This is the Single Color Palette</h2>
        <div className='Palette-color'>{colorBoxes}</div>
      </div>
    );
  }
}
