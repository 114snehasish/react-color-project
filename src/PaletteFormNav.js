import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import PaletteMetaForm from './PaletteMetaForm';
import { useStyles } from './Styles/PaletteFormNavStyles';

const PaletteFormNav = ({
  classes,
  open,
  palettes,
  handleDrawerOpen,
  savePalette,
}) => {
  const [formShowing, setFormShowing] = useState(false);
  classes = { ...classes, ...useStyles() };

  const showDialog = () => {
    setFormShowing(true);
  };

  const hideDialog = () => {
    setFormShowing(false);
  };

  return (
    <div className={classes.navRoot}>
      <CssBaseline />
      <AppBar
        position='fixed'
        color='default'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Create a Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to='/' className={classes.button}>
            <Button variant='contained' color='secondary'>
              Go Back
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            onClick={showDialog}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          savePalette={savePalette}
          handleHideDialog={hideDialog}
        />
      )}
    </div>
  );
};

export default PaletteFormNav;
