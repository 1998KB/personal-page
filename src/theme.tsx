import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Replace with your desired primary color
    },
    secondary: {
      main: "rgba(205, 180, 145, 1)", // Replace with your desired secondary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(205, 180, 145, .1)", // Replace with your desired hover color
            // Add other hover styles here if needed
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        groupedHorizontal: {
          "&:not(:last-child)": {
            borderColor: "rgba(0,0,0,.3)", // Change the border color here
          },
        },
      },
    },
  },
});

export default theme;
