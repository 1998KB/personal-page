import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import AvatarLanding from "../Images/AvatarNav.png";
import Typewriter from "react-ts-typewriter";

export const Landing = () => {
  const [cursor, setCursor] = useState(true);
  const [showTypewriter1, setShowTypewriter1] = useState(false);
  const [showTypewriter2, setShowTypewriter2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowTypewriter1(true);
    }, 1300); // Set the initial delay for Typewriter 1

    const timeout2 = setTimeout(() => {
      setShowTypewriter2(true);
    }, 6500); // Set the initial delay for Typewriter 2

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <LandingContainer>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,.8)",
          padding: "3em",
          height: "35em",
          width: { xs: "90%", md: "40%" },
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "top",
          borderBottom: "3px solid #59692e",
        }}
      >
        <Avatar
          sx={{
            height: { xs: 150, sm: 200, lg: 250 },
            width: { xs: 150, sm: 200, lg: 250 },
          }}
          src={AvatarLanding}
          alt="Klajdi Beqiraj"
        />
        <Box sx={{ marginTop: "3em" }}>
          <Typography
            sx={{ color: "white", fontFamily: "SequelSansMediumHead" }}
            variant="h4"
          >
            <Typewriter text={["Klajdi Beqiraj"]} speed={40} cursor={false} />
          </Typography>
          <Box sx={{ marginTop: "1em" }}>
            {showTypewriter1 && (
              <Typography
                sx={{
                  color: "#59692e ",
                  textTransform: "uppercase",
                  fontFamily: "SequelSansHeavyHead",
                  marginTop: ".5em",
                }}
                variant="h5"
              >
                <Typewriter
                  text={[
                    "Polyglot",
                    "FullStack Developer",
                    "Entrepreneur",
                    "Human being",
                  ]}
                  speed={70}
                  cursor={cursor}
                  onFinished={() => setCursor(false)}
                />
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "3em" }}>
          {showTypewriter2 && (
            <Typography
              sx={{
                color: "white",
                fontFamily: "SequelSansBookBody",
                textAlign: "center",
                marginTop: "1em",
              }}
              variant="h6"
            >
              <Typewriter
                text={["Welcome to my personal page! 🎈"]}
                speed={50}
                cursor={cursor}
                onFinished={() => setCursor(false)}
              />
            </Typography>
          )}
        </Box>
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
    margin-top: 5em;
  }
`;
