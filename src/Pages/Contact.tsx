import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Tab,
  Tabs,
  TextField,
  Typography,
  withStyles,
} from "@mui/material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import Linkedln from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/SendOutlined";
import {
  handlGitHubClick,
  handleInstagramClick,
  handleLinkedlnClick,
} from "../Components/Footer";
import { LinkedIn } from "@mui/icons-material";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setError(true);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      form_email: formData.email,
      form_message: formData.message,
    };
    emailjs.init("NPt7mNcSpels1zThI");

    emailjs
      .send("service_b615p2w", "template_635okgk", templateParams)
      .then((response: any) => {
        console.log("Email sent successfully!", response.text);
        // Reset form fields
        setFormData({ name: "", email: "", message: "" });
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error: any) => {
        console.error("Error sending email:", error);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [success, error]);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,.7)",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
          height: { xs: "100vh", md: "85vh" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
            }}
          >
            Have something to say? I am are here to help. <br />
            Fill up the form or send email or call phone.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EmailOutlined style={{ marginRight: "0.5em", color: "white" }} />
            <a
              href="mailto:klajdibeqiraj88@gmail.com"
              style={{ color: "white" }}
            >
              klajdibeqiraj88@gmail.com
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PhoneOutlined style={{ marginRight: "0.5em", color: "white" }} />
            <a href="tel:+31653329287" style={{ color: "white" }}>
              +31 6 53329287
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs>
              <Tab
                icon={<LinkedIn />}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fill: "white",
                    transform: "scale(1.5)",

                    transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
                    "&:hover": {
                      transform: "scale(1.6)",
                    },
                  },
                }}
                onClick={handleLinkedlnClick}
              />
              <Tab
                icon={<GitHub />}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fill: "white",
                    transform: "scale(1.5)",

                    transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
                    "&:hover": {
                      transform: "scale(1.6)",
                    },
                  },
                }}
                onClick={handlGitHubClick}
              />
              <Tab
                icon={<Instagram />}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fill: "white",
                    transform: "scale(1.5)",

                    transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
                    "&:hover": {
                      transform: "scale(1.6)",
                    },
                  },
                }}
                onClick={handleInstagramClick}
              />
            </Tabs>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "70%", lg: "50%" } }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "1em",
            }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              value={formData.message}
            />
            <Button
              sx={{
                color: "tan",
                borderColor: "tan",
                "&hover": {
                  background: "tan",
                  color: "white",
                },
              }}
              type="submit"
              variant="outlined"
              fullWidth
              endIcon={<SendIcon />}
            >
              Contact Me
            </Button>
            <Box
              style={{ height: "1em", marginTop: "1em", textAlign: "center" }}
            >
              {error && (
                <Typography style={{ color: "red" }}>
                  Please fill in all fields
                </Typography>
              )}
              {success && (
                <Typography style={{ color: "green" }}>
                  Email sent successfully!
                </Typography>
              )}
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
