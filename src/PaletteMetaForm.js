import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default function PaletteMetaForm({
  palettes,
  savePalette,
  handleHideDialog,
}) {
  const open = true;
  const [newPaletteName, setNewPaletteName] = useState("");
  const [stage, setStage] = useState("name");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      );
    });
  }, [palettes]);

  const handleChange = (event) => {
    event.preventDefault();
    setNewPaletteName(event.target.value);
  };

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  return (
    <>
      <Dialog open={stage === "emoji"} onClose={handleHideDialog}>
        <DialogTitle>Choose a Palette Emoji</DialogTitle>
        <Picker
          title="Pick a Palette Emoji"
          onSelect={(emoji) => savePalette(newPaletteName, emoji.native)}
        />
      </Dialog>
      <Dialog open={stage === "name"} onClose={handleHideDialog}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please give a name to your palette. Make sure that you don't
              provide any duplicate name.
            </DialogContentText>
            <TextValidator
              autoFocus
              fullWidth
              margin="normal"
              label="Palette Name"
              onChange={handleChange}
              value={newPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Palette Name is required",
                "Palette names already used",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleHideDialog}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
}
