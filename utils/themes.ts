import { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const LIGHT_THEME = "light";
// Light mode theme
export const light: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#FFFFFF",
    surface: "#363636",
    primary: twColors.gray[500],
    secondary: twColors.gray[800],
    error: twColors.gray[500],
    info: twColors.gray[500],
    success: twColors.gray[500],
    warning: twColors.gray[500],
  },
};

