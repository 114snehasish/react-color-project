import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

export default class SingleColorPalette extends Component {
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
    const { palette } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showingFullColorPalette={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeColorFormat} showSlider={false} />
        <div className="Palette-color">
          {colorBoxes}
          <div className={"go-back ColorBox"}>
            <Link to={`/palette/${palette.id}`}>
              <button className="ColorBox-back-button">GO BACK</button>
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
