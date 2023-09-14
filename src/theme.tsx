import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Replace with your desired primary color
    },
    secondary: {
      main: "#59692e", // Replace with your desired secondary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#59692e", // Replace with your desired hover color
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
          color: "#59692e",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#59692e",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#59692e",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "#fff",
            borderColor: "#59692e",
          },
        },
      },
    },
  },
});

export default theme;
