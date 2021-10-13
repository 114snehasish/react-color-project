import sizes from "./Sizes";

export const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paletteColor: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: (props) => (props.showingFullColorPalette ? "25%" : "50%"),
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    margin: "0 auto -4px",
    backgroundColor: "black",
    "& a": {
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      width: "40%",
      height: "1.4rem",
      marginLeft: "-20%",
      marginTop: "-0.7rem",
      textAlign: "center",
      outline: "none",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      textTransform: "uppercase",
      fontSize: "0.8rem",
      lineHeight: "1.2rem",
      border: "none",
      color: "white",
      textDecoration: "none",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33% !important",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20% !important",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10% !important",
    },
  },
};
