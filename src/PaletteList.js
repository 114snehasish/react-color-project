import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Palletty</h1>
        <MiniPalette />
        {palettes.map((p) => (
          <p>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}
