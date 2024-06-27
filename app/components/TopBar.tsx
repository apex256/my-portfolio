"use client"; // Client component

import * as React from "react";
import { Adb, GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";

// Page links for the middle portion of the top bar
const pages = ["about", "portfolio", "contact"];

// Social Links for the right portion of the top bar
const links = [
  {
    name: "GitHub",
    icon: <GitHub sx={{ color: "white" }} fontSize="large" />,
    link: "https://github.com/apex256/",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={{ color: "white" }} fontSize="large" />,
    link: "https://www.linkedin.com/in/david-mcmasters-756067188/",
  },
  {
    name: "Instagram",
    icon: <Instagram sx={{ color: "white" }} fontSize="large" />,
    link: "https://www.instagram.com/david_mcm979/",
  },
];

export const TopBar = () => {
  return (
    <AppBar position="static">
      <Container sx={{ minWidth: "100%" }}>
        <Toolbar>
          <IconButton href={""}>
            <Adb
              sx={{
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              margin: "auto",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={page}
                sx={{ my: 0, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            id="top-bar-links"
            sx={{
              float: "right",
            }}
          >
            {links.map((link) => (
              <Tooltip title={link.name} key={`social-link-${link.name}`}>
                <IconButton href={link.link}>{link.icon}</IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
