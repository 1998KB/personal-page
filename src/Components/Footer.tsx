import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import Linkedln from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";

export const handleLinkedlnClick = () => {
  window.open(
    "https://www.linkedin.com/in/klajdi-beqiraj-1998-leven",
    "_blank"
  );
};

export const handlGitHubClick = () => {
  window.open("https://github.com/1998KB", "_blank");
};

export const handleInstagramClick = () => {
  window.open("https://www.instagram.com", "_blank");
};

export const Footer = () => {
  return (
    <BottomNavigation sx={{ background: "#000" }}>
      <BottomNavigationAction
        icon={<Linkedln />}
        onClick={handleLinkedlnClick}
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "white",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          },
        }}
      />
      <BottomNavigationAction
        icon={<GitHub />}
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "white",
            transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
            "&:hover": {
              transform: "scale(1.1)",
            },
          },
        }}
        onClick={handlGitHubClick}
      />
      <BottomNavigationAction
        icon={<Instagram />}
        onClick={handleInstagramClick}
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "white",
            transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
            "&:hover": {
              transform: "scale(1.1)",
            },
          },
        }}
      />
    </BottomNavigation>
  );
};
