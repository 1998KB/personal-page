import React from "react";
import "./Aboutme.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { timelineData } from "../content";
import { stack } from "../content";

export const Aboutme = () => {
  return (
    <Box component="header" className="mainContainer">
      <Box component="div" className="timeLine">
        <Box component="div" className="timeLineItem">
          <Typography
            variant="h5"
            align="center"
            className="subHeading"
            sx={{ fontFamily: "SequelSansHeavyHead" }}
          >
            Technologies
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className="body1"
            sx={{ fontFamily: "SequelSansMediumHead", marginTop: ".2em" }}
          >
            My Stack
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "start" },
              alignItems: "center",
              width: "100%",
              marginTop: "1em",
            }}
          >
            {stack.map((stack, i) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: { xs: "2em", sm: "1em" },
                  width: `calc(100% / 10)` /* Adjust the number (4) as needed */,
                }}
              >
                <img style={{ height: "2em" }} src={stack.icon} />
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
        </Box>
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
