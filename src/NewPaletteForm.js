import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { useStyles } from './Styles/NewPaletteFormStyles';

export default function NewPaletteForm(props) {
  const maxColors = 20;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [colors, setColors] = React.useState(props.palettes[0].colors);
  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (currentColor, currentName) => {
    const color = {
      color: currentColor,
      name: currentName,
    };
    setColors([...colors, color]);
  };

  const deleteColor = (name) => {
    setColors(colors.filter((c) => c.name !== name));
  };

  const clearPalette = () => setColors([]);

  const addRandomColor = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();
    const randomIdx = Math.floor(Math.random() * allColors.length);
    setColors([...colors, allColors[randomIdx]]);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const savePalette = (newPaletteName, emoji) => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      emoji: emoji,
      id: newName.toLocaleLowerCase().replace(/ /g, '-'),
      colors: colors,
    };
    props.savePalette(newPalette);
    props.history.push('/');
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        classes={classes}
        open={open}
        palettes={props.palettes}
        handleDrawerOpen={handleDrawerOpen}
        savePalette={savePalette}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.drawerContainer}>
          <Typography variant='h4' gutterBottom>
            Design your palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={addRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
            palettes={props.palettes}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          deleteColor={deleteColor}
          axis='xy'
          onSortEnd={onSortEnd}
          distance={5}
        />
      </main>
    </div>
  );
}
