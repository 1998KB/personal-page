import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { projects } from "../content";
import "../styles.css";
import Link from "../Images/link.png";
import Live from "../Images/live.png";

import { GitHub } from "@mui/icons-material";

export const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: { lg: 5 },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          width: "90%",
        }}
      >
        {projects.map((project, i) => (
          <Grid item xs={12} sm={12} md={6} lg={4} spacing={0} key={i}>
            <Card
              sx={{
                backgroundColor: "rgba(0,0,0,0.8)",
                cursor:
                  project.link || project.liveDemo ? "pointer" : "default",
                borderRadius: "24px",
                maxWidth: 470,
                margin: { xs: "2rem auto", md: "2rem 1em" },
                animation: "fadeIn 1s", // Apply the fadeIn animation
                transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
              onClick={() => {
                if (project.link) {
                  window.open(project.link, "_blank");
                }
                if (project.liveDemo) {
                  window.open(project.liveDemo, "_blank");
                } else {
                  return 0;
                }
              }}
            >
              <CardMedia
                component="img"
                alt="Project 1"
                height="200"
                image={project.image}
                sx={{ borderBottom: "2px solid #59692e" }}
              />

              <CardContent
                sx={{
                  height: "14em",
                }}
              >
                <Typography
                  sx={{ color: "white", fontFamily: "SequelSansMediumHead" }}
                  variant="h5"
                  gutterBottom
                >
                  {project.name}
                </Typography>
                <Box
                  sx={{
                    marginTop: ".8rem",
                    marginBottom: ".8rem",
                    flexWrap: "wrap",
                    display: "flex",
                    width: "100%",
                    gap: "1em",
                    alignItems: "center",
                    color: "#b0b0b0",
                    height: "2.6em",
                  }}
                >
                  {project.technology.map((tech, i) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5em",
                        color: "white",
                      }}
                    >
                      <img
                        style={{
                          height: "1.3em",
                          width: "1.3em",
                        }}
                        src={tech.icon}
                      />
                      <Typography
                        sx={{ fontFamily: "SequelSansBookDisplay" }}
                        color="#b0b0b0"
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography
                  variant="body2"
                  color="white"
                  sx={{ mt: 5, fontFamily: "SequelSansBookBody" }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup
                  variant="text"
                  size="small"
                  color="primary"
                  aria-label="text button group"
                  sx={{
                    justifyContent: "space-evenly",
                    width: "100%",
                    alignItems: "end",
                  }}
                >
                  {project.liveDemo && (
                    <Button
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                        height: "3em",
                        color: "#b0b0b0",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                    >
                      <img
                        style={{
                          height: "2em",
                          width: "2em",
                          marginRight: ".5em",
                        }}
                        src={Live}
                      />
                      Demo
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      style={{
                        width: "100%",
                        height: "3em",
                        color: "#b0b0b0",
                        borderRadius: "12px",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <img
                        style={{
                          height: "2em",
                          width: "2em",
                          marginRight: ".5em",
                        }}
                        src={Link}
                      />
                      Link
                    </Button>
                  )}
                  {project.gitF && (
                    <Button
                      style={{
                        width: "100%",
                        height: "3em",
                        color: "#b0b0b0",
                        borderRadius: "12px",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.gitF, "_blank")}
                    >
                      <GitHub style={{ color: "white", marginRight: ".5em" }} />
                      Frontend
                    </Button>
                  )}
                  {project.gitB && (
                    <Button
                      style={{
                        width: "100%",
                        height: "3em",
                        color: "#b0b0b0",
                        borderRadius: "12px",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.gitB, "_blank")}
                    >
                      <GitHub style={{ color: "white", marginRight: ".5em" }} />
                      Backend
                    </Button>
                  )}
                </ButtonGroup>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
