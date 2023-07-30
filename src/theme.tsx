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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "white",
          },
          color: "tan",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "tan",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "tan",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "#fff",
            borderColor: "tan",
          },
        },
      },
    },
  },
});

export default theme;
