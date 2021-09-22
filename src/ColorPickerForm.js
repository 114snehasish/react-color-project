import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles/ColorPickerFormStyle";

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
    ValidatorForm.addValidationRule("isColorUnique", () => {
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
