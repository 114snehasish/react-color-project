import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";

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

  return (
    <>
      <ChromePicker
        color={currentColor}
        onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
      />
      <ValidatorForm
        onSubmit={() => {
          addNewColor(currentColor, currentName);
          setCurrentName("");
        }}
      >
        <TextValidator
          value={currentName}
          onChange={handleChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "This is a required field",
            "Color names must be unique",
            "Colors in the palette must be unique",
          ]}
        />
        <Button
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
