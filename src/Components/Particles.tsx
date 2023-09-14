import React, { useCallback } from "react";
import ParticlesJS from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export const Particles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <ParticlesJS
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#ff4500",
            animation: {
              enable: true,
              speed: 20,
              sync: true,
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 4,
              sync: false,
            },
          },
          links: {
            enable: true,
          },
          shape: {
            type: "rounded-rect",
            options: {
              "rounded-rect": {
                radius: { min: 5, max: 15 },
              },
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 30,
          },
          move: {
            enable: true,
            speed: 4,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
      }}
    />
  );
};
