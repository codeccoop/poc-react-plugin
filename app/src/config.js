import { createTheme } from "@material-ui/core/styles";
import logo from "./assets/logo.png"

export const rawTheme = createTheme({
  theme: {
    palette: {
      primary: {
        main: "#fabada",
      },
    },
    typography: {
      fontFamily: "Arial",
      fontStyle: "italic",
      fontSize: "1rem",
    },
  },
  coopName: "Mi cooperativa",
});

export const config = {
  theme: rawTheme,
  logo: logo
};

