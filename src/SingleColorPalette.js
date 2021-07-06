import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";
import { withStyles } from '@material-ui/styles';

const style = {
  palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  paletteColor: {
    height: '90%',
  },
  goBack: {
    width: "20%",
    height: (props) => (props.showingFullColorPalette ? "25%" : "50%"),
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    margin: "0 auto -4px",
    backgroundColor: 'black',
    '& a': {
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
      color: "white",
      textDecoration: 'none',
    }
  }
};

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
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
            <Link to={`/palette/${palette.id}`}>
              GO BACK
            </Link>
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

export default withStyles(style)(SingleColorPalette)
