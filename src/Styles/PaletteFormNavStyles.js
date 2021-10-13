import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "./StyleVars";
import sizes from "./Sizes";

export const useStyles = makeStyles((theme) => ({
  navRoot: {
    display: "flex",
    height: "64px",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("xs")]: { marginRight: "0.5rem" },
  },
  button: {
    margin: "0 0.5rem",
    textDecoration: "none",
    [sizes.down("xs")]: { margin: "0.1rem" },
  },
}));
