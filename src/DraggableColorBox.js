import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    margin: "0 auto -4px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.2)",
    },
  },
  boxContent: {
    position: "absolute",
    padding: "0.5em",
    width: "100%",
    boxSizing: "border-box",
    bottom: "0",
    left: "0",
    letterSpacing: "0.2em",
    fontSize: "80%",
    display: "flex",
    justifyContent: "space-between",
    color: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  deleteIcon: {
    transition: "all 0.3s ease",
  },
};

const DraggableColorBox = SortableElement(({ color, classes, handleClick }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color.color }}>
      <div className={classes.boxContent}>
        <span>{color.name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
