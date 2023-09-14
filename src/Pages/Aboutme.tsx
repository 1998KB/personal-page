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
                variant="h5"
                align="center"
                className="subHeading"
                sx={{ fontFamily: "SequelSansHeavyHead" }}
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
                align="center"
                className="subtitle1"
                sx={{
                  fontFamily: "SequelSansBookDisplay",
                  marginTop: "1em",
                  textAlign: "left",
                }}
              >
                {item.body}
              </Typography>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};
