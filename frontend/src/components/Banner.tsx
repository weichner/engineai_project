import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useRouteName } from "../RouteContext";

const Banner: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { routeName } = useRouteName();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        backgroundColor: "#90caf9",
        color: "white",
        padding: isSmallScreen ? "20px" : "40px",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0 0 10px 10px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: theme.transitions.create(["left"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        sx={{ fontWeight: "bold" }}
      >
        Welcome to Security Overview
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Stay informed with the latest data on all securities.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          bottom: "20px",
          left: isSmallScreen ? "50%" : "20px",
          transform: isSmallScreen ? "translateX(-50%)" : "none",
          fontWeight: "bold",
          fontSize: "40px",
          opacity: 0.9,
        }}
      >
        {routeName}
      </Typography>
    </Box>
  );
};

export default Banner;
