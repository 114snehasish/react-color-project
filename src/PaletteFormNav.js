import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import React, { useEffect } from "react";

const PaletteFormNav = ({
  classes,
  open,
  palettes,
  handleDrawerOpen,
  savePalette,
}) => {
  const [newPaletteName, setNewPaletteName] = React.useState("");
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      );
    });
  }, [palettes]);

  const handlePaletteNameChange = (event) => {
    event.preventDefault();
    setNewPaletteName(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <ValidatorForm onSubmit={() => savePalette(newPaletteName)}>
            <TextValidator
              label="Palette Name"
              onChange={handlePaletteNameChange}
              value={newPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Palette Name is required",
                "Palette names already used",
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PaletteFormNav;
