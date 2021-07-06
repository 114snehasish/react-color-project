import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './Styles/MiniPaletteStyles'
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniPalette = colors.map((col) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: col.color }}
      key={col.name}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={props.haandleClick}>
      <div className={classes.colors}>{miniPalette}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
