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

export const Projects = () => {
  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, .7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
                maxWidth: 470,
                margin: { xs: "2rem auto", md: "2rem 1em" },
                animation: "fadeIn 1s", // Apply the fadeIn animation
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.4)", // Add a box-shadow effect
                transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "0 0px 16px rgba(255, 255, 255, 0.6)", // Modify the box-shadow on hover
                },
              }}
            >
              <CardMedia
                component="img"
                alt="Project 1"
                height="200"
                image={project.image}
              />

              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Box
                  sx={{
                    marginTop: ".5rem",
                    marginBottom: ".5rem",
                    flexWrap: "wrap",
                    display: "flex",
                    width: "100%",
                    gap: "1em",
                    alignItems: "center",
                  }}
                >
                  {project.technology.map((tech, i) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5em",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.625rem",
                          color: "rgba(205, 180, 145, 1)",
                        }}
                      >
                        &bull;
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {tech}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Typography variant="body2" color="">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup
                  variant="text"
                  size="small"
                  color="primary"
                  aria-label="text button group"
                  sx={{ justifyContent: "space-evenly", width: "100%" }}
                >
                  {project.liveDemo && (
                    <Button
                      style={{
                        width: "100%",
                        minHeight: "5em",
                        color: "black",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.liveDemo, "_blank")}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      style={{ width: "100%", height: "5em", color: "black" }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      Link
                    </Button>
                  )}
                  {project.gitF && (
                    <Button
                      style={{ width: "100%", height: "5em", color: "black" }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.gitF, "_blank")}
                    >
                      GitHub Frontend
                    </Button>
                  )}
                  {project.gitB && (
                    <Button
                      style={{
                        width: "100%",
                        height: "5em",
                        color: "black",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.gitB, "_blank")}
                    >
                      GitHub Backend
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
