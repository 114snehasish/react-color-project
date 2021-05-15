import React from 'react';
import { withStyles } from '@material-ui/styles';
const styles = {
  main: {
    backgroundColor: 'purple',
    border: '1px solid teal',
    '& h1': {
      color: 'white',
    },
  },
  secondary: { backgroundColor: 'teal', '& h1': { color: 'blue' } },
};
function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
      <div className={classes.secondary}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad ut
        <h1>this is secondary</h1>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
