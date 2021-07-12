import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { styles } from './Styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Palletty</h1>
            <Link to={`/palette/new`} >Create new</Link>
          </nav>
          <div className={classes.palette}>
            {palettes.map((p) => (
              <MiniPalette {...p} haandleClick={() => this.goToPalette(p.id)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
