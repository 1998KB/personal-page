import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import AvatarLanding from "../Images/AvatarNav.png";
import Typewriter from "react-ts-typewriter";

export const Landing = () => {
  const [cursor, setCursor] = useState(true);
  const [showTypewriter1, setShowTypewriter1] = useState(false);
  const [showTypewriter2, setShowTypewriter2] = useState(false);
  const [showTypewriter3, setShowTypewriter3] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowTypewriter1(true);
    }, 1300); // Set the initial delay for Typewriter 1

    const timeout2 = setTimeout(() => {
      setShowTypewriter2(true);
    }, 5000); // Set the initial delay for Typewriter 2

    const timeout3 = setTimeout(() => {
      setShowTypewriter3(true);
    }, 21000); // Set the initial delay for Typewriter 2

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <LandingContainer>
      <Avatar
        sx={{
          height: { xs: 150, sm: 200, lg: 250 },
          width: { xs: 150, sm: 200, lg: 250 },
        }}
        src={AvatarLanding}
        alt="Klajdi Beqiraj"
      />
      <Box>
        <Typography sx={{ color: "white" }} variant="h4">
          <Typewriter
            text={["Klajdi Beqiraj"]}
            speed={40}
            cursor={false}
            delay={3000}
          />
        </Typography>
        {showTypewriter1 && (
          <Typography
            sx={{ color: "tan", textTransform: "uppercase" }}
            variant="h5"
          >
            <Typewriter
              text={[
                "Polyglot",
                "FullStack Developer",
                "Entrepreneur",
                "Human being",
              ]}
              speed={40}
              cursor={cursor}
              onFinished={() => setCursor(false)}
            />
          </Typography>
        )}
      </Box>
      <Box sx={{ width: "80%", height: "20vh" }}>
        {showTypewriter2 && (
          <Typography
            sx={{
              color: "white",
              fontStyle: "italic",
              textAlign: "left",
              fontSize: { xs: 12, sm: 16, lg: 20 },
            }}
            variant="h6"
          >
            <Typewriter
              text={[
                "Greetings, friend! 🎈 It's Klajdi here, a 24-year-old human originally from Albania 🇦🇱 but now embracing the wonders of Amsterdam 🇳🇱.",
                " Welcome to my personal page! 🌟 Feel free to explore the site using the menu and if you need anything or simply want to connect, drop me a message! 📩 ",
                "",
              ]}
              speed={35}
              cursor={cursor}
              onFinished={() => setCursor(false)}
            />
          </Typography>
        )}
        {showTypewriter3 && (
          <Typography
            sx={{ color: "white", fontStyle: "italic", textAlign: "center" }}
            variant="h6"
          >
            <Typewriter
              text={[" Enjoy your time here! 🎉 "]}
              speed={35}
              cursor={cursor}
              onFinished={() => setCursor(false)}
            />
          </Typography>
        )}
      </Box>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  gap: 2em;
  margin-top: 4em;
  @media (min-width: 960px) {
    margin-top: 10em;
  }
`;
