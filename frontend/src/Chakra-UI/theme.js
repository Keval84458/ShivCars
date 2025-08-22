"use client";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    white: {
      100: "#FFFFFF",
      33: "#ffffff33",
      50: "#ffffff8c",
      90: "#EEF6FB",
      bc: "#BCBFC0",
    },
    black: {
      100: "#000000",
      26: "#262626",
      33: "#333",
      20: "#202020",
      16: "#161616",
      "004a": "#0000004a",
      "2d": "#2d2f30",
      "2b": "#2b2b2b",
      13: "#131313",
      "2c": "#2C2F30",
      "3c": "#3c4043",
      "302d": "#302d2d",
      36: "#363a3d",
      37: "#8a8888",
      38: "#1b1f23",
      39: "#5a5e62",
      40: "#0000002b",
      41: "#1b1f23",
      42: "#bbbdbf",
      43: "#0000007a",
      44: "#E2EAEF",
      45: "#6f8898",
      46: "#1e1e1e",
      47: "#5a5e62",
      48: "#262c3299",
      49: "#97acbf",
      50: "#f2f5f4",
    },
    primary: {
      100: "#ECE0D1",
      200: "#DBC1AC",
      300: "#C0A080",
      400: "#A47551",
      500: "#8B5E3C",
      600: "#6F4E37",
      700: "#5C4033",
      800: "#4B3621",
      900: "#3B2F2F",
      1000: "#2C2723",
      110: "#B89F8C",
      120: "#A68A79",
      130: "#8E735B",
      140: "#D9CAB3",
    },
    secondary: {
      100: "#FAF3E0",
      200: "#F5E6CC",
      300: "#EAD2B8",
      400: "#D7B89C",
      500: "#C9A77A",
      600: "#B5895D",
      700: "#9C6F43",
      800: "#7B5432",
      900: "#5A3C21",
      1000: "#3E2A14",
    },

    blue: {
      100: "#7CC3F5",
      200: "#369DE6",
      gradient1: "linear-gradient(90deg,#7cc3f5,#c4abee 54%,#faa9ba)",
    },
    pink: {
      100: "#FAA9BA",
      200: "#F66987",
      300: "#f8cdfa",
    },
    grey: {
      158: "rgb(158, 167, 171)",
    },
    green: {
      "8b": "#57ff8b",
      114: "rgb(114 199 117 / 1)",
      115: "#11ba13",
      19: "#198754",
      20: "#d4fcdd",
      21: "#9dfab6",
    },
    red: {
      66: "rgb(254, 13, 66)",
      dc35: "#e20000",
      error: "#E53E3E",
      b9: "#b90801",
    },
    yellow: {
      warning: "#ffc107",
      spark: "#f8e71c",
    },
    blue: {
      spark: "#26f1f8",
    },
    transparent: "transparent",
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "primary.100",
          color: "black.100",
          _hover: {
            bg: "primary.100",
            _disabled: {
              bg: "primary.100",
            },
          },
        },
        black100: {
          bg: "black.100",
          color: "white.100",
          _hover: {
            bg: "black.100",
            _disabled: {
              bg: "black.100",
            },
          },
        },
        secondary: {
          bg: "white.100",
          color: "black.100",
          _hover: {},
        },
        dark: {
          bg: "black.3c",
          color: "white.100",
          _hover: {},
        },
        dark20: {
          bg: "black.20",
          color: "white.100",
          _hover: {},
        },
        dark21: {
          bg: "black.43",
          color: "white.100",
          _hover: {},
        },
        dark36: {
          bg: "black.36",
          color: "white.100",
          _hover: {},
        },
        transparent: {
          bg: "transparent",
          color: "white.100",
          _hover: {},
          _active: {},
        },
        success: {
          bg: "green.19",
          color: "white.100",
          _hover: {
            bg: "green.19",
            _disabled: {
              bg: "green.19",
            },
          },
        },
        danger: {
          bg: "red.dc35",
          color: "white.100",
          _hover: {
            bg: "red.dc35",
            _disabled: {
              bg: "red.dc35",
            },
          },
        },
      },
    },
  },
});

export default theme;
