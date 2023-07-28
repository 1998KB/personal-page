import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "../Images/AvatarNav.png";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Footer } from "./Footer";

const menuItems = [
  { listIcon: <HomeRoundedIcon />, listText: "Home", listPath: "/" },
  {
    listIcon: <ComputerRoundedIcon />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <AppsRoundedIcon />,
    listText: "Blog",
    listPath: "https://blog-hm52-1998kb.vercel.app",
  },
  { listIcon: <PersonIcon />, listText: "About me", listPath: "/aboutme" },

  { listIcon: <EmailIcon />, listText: "Contact", listPath: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const sideList = () => (
    <SideListContainer>
      <AvatarNav src={Avatar} />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem key={i} sx={{ color: "black" }}>
            <ListItemButton
              component={Link}
              to={item.listText !== "Blog" ? item.listPath : "#"}
              onClick={() => {
                if (item.listText === "Blog") {
                  window.open(item.listPath, "_blank");
                  setOpen(false);
                } else {
                  setOpen(false);
                }
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText primary={item.listText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SideListContainer>
  );

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/projects":
        return "Projects";
      case "/aboutme":
        return "About me";
      case "/blog":
        return "Blog";
      case "/contact":
        return "Contact me";
      default:
        return "Home"; // Default title for other paths
    }
  };

  return (
    <>
      <Box component="nav">
        <AppBar position="static" sx={{ background: "#000", margin: 0 }}>
          <Toolbar
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "right",
            }}
          >
            <Typography variant="h5" sx={{ color: "tan" }}>
              {getTitle()}
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </>
  );
};

const SideListContainer = styled.div`
  width: 250px;
  background: "#fff";
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AvatarNav = styled.img`
  display: block;
  margin: 0.1rem auto;
  width: 100px;
  height: 100px;
`;
