import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./Styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, remove, id } = props;
  const miniPalette = colors.map((col) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: col.color }}
      key={col.name}
    />
  ));
  const deletePalette = (event) => {
    event.stopPropagation();
    remove(id);
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

export default withStyles(styles)(MiniPalette);
