import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./Styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniPalette = colors.map((col) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: col.color }}
      key={col.name}
    />
  ));
  return (
    <div className={classes.root} onClick={props.haandleClick}>
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniPalette}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
