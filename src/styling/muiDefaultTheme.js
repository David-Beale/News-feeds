import { createMuiTheme } from "@material-ui/core/styles";

export const makeMuiTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: "rgb(25,120,216)",
      },
    },
    overrides: {},
  });
