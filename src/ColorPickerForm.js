import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColorButton: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem",
  },
  colorNameInput: { width: "100%", marginTop: ".5rem" },
  form: { width: "100%" },
}));

export default function ColorPickerForm({
  paletteIsFull,
  addNewColor,
  palettes,
  colors,
}) {
  const [currentColor, setCurrentColor] = useState("teal");
  const [currentName, setCurrentName] = useState("");
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor, palettes]);

  const handleChange = (event) => {
    event.preventDefault();
    setCurrentName(event.target.value);
  };

  const classes = useStyles();

  return (
    <>
      <ChromePicker
        className={classes.picker}
        color={currentColor}
        onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
      />
      <ValidatorForm
        className={classes.form}
        onSubmit={() => {
          addNewColor(currentColor, currentName);
          setCurrentName("");
        }}
      >
        <TextValidator
          className={classes.colorNameInput}
          value={currentName}
          placeholder="Color Name"
          onChange={handleChange}
          variant="filled"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "This is a required field",
            "Color names must be unique",
            "Colors in the palette must be unique",
          ]}
        />
        <Button
          className={classes.addColorButton}
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: paletteIsFull ? "lightgrey" : currentColor,
          }}
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </>
  );
}
