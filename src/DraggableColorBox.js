import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

import { styles } from './Styles/DraggableColorBoxStyles';

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
