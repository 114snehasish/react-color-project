import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { format: 'hex' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ format: event.target.value });
    this.props.handleChange(event.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className='NavBar'>
        <div className='logo'>
          <a href='#'>Palletty</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
            <MenuItem value='rgb'>RGB - RGB(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA- RGBA(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
