import React, { memo } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import { styles } from './Styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, openDialog, id } = props;
  const miniPalette = colors.map((col) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: col.color }}
      key={col.name}
    />
  ));
  const deletePalette = (event) => {
    event.stopPropagation();
    openDialog(id);
  };
  return (
    <div className={classes.root} onClick={props.haandleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      <div className={classes.colors}>{miniPalette}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.paletteName === nextProps.paletteName;
}

export default withStyles(styles)(memo(MiniPalette, arePropsEqual));
