import React from "react";
import "./Aboutme.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { timelineData } from "../content";

export const Aboutme = () => {
  return (
    <Box component="header" className="mainContainer">
      <Box component="div" className="timeLine">
        {timelineData.map((item, idx) => (
          <React.Fragment key={idx}>
            <Box component="div" className="timeLineItem">
              <Typography
                align="center"
                className="subHeading"
                sx={{ fontFamily: "SequelSansHeavyHead", fontSize: "1.7em" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                className="body1"
                sx={{ fontFamily: "SequelSansMediumHead", marginTop: ".2em" }}
              >
                {item.subtitle}
              </Typography>
              <Typography
                variant="subtitle1"
                className="subtitle1"
                sx={{
                  fontFamily: "SequelSansBookDisplay",
                  lineHeight: "2em",
                  fontSize: "1.2em",
                  marginTop: "1em",
                }}
              >
                {item.body}
              </Typography>
              {item.stack && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "1em",
                  }}
                >
                  {item.stack.map((stack, i) => (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1em",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: { xs: "2em", sm: "1em" },
                        width: `calc(100% / 10)` /* Adjust the number (4) as needed */,
                      }}
                    >
                      <img style={{ height: "3em" }} src={stack.icon} />
                      <Typography
                        variant="subtitle1"
                        align="center"
                        className="subtitle1"
                        sx={{
                          fontFamily: "SequelSansBookDisplay",
                          textAlign: "center",
                        }}
                      >
                        {stack.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};
