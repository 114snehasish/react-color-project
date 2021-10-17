import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { styles } from './Styles/PaletteStyles';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    const { palette, colorId } = this.props;
    this._shades = this.gatherShades(palette, colorId);
    this.changeColorFormat = this.changeColorFormat.bind(this);
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
  changeColorFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { format } = this.state;
    const { palette, classes } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showingFullColorPalette={false}
      />
    ));
    return (
      <div className={`SingleColorPalette ${classes.palette}`}>
        <Navbar handleChange={this.changeColorFormat} showSlider={false} />
        <div className={classes.paletteColor}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${palette.id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
