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
                borderRadius: "24px",
                maxWidth: 470,
                margin: { xs: "2rem auto", md: "2rem 1em" },
                animation: "fadeIn 1s", // Apply the fadeIn animation
                transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transitions for smooth effects
                "&:hover": {
                  transform: "scale(1.01)",
                },
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
                  height: "10em",
                }}
              >
                <Typography sx={{ color: "white" }} variant="h5" gutterBottom>
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
                    color: "#b0b0b0",
                  }}
                >
                  {project.technology.map((tech, i) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".3em",
                        color: "white",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.625rem",
                        }}
                      >
                        &bull;
                      </Typography>
                      <Typography variant="body2" color="#b0b0b0">
                        {tech}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Typography
                  variant="body2"
                  color="white"
                  sx={{ mt: { xl: 4 } }}
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
                  sx={{ justifyContent: "space-evenly", width: "100%" }}
                >
                  {project.liveDemo && (
                    <Button
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                        minHeight: "5em",
                        color: "#b0b0b0",
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
                      style={{
                        width: "100%",
                        height: "5em",
                        color: "#b0b0b0",
                        borderRadius: "12px",
                      }}
                      size="small"
                      color="primary"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      Link
                    </Button>
                  )}
                  {project.gitF && (
                    <Button
                      style={{
                        width: "100%",
                        height: "5em",
                        color: "#b0b0b0",
                        borderRadius: "12px",
                      }}
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
                        color: "#b0b0b0",
                        borderRadius: "12px",
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
