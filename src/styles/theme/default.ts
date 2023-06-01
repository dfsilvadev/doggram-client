const theme = {
  grid: {
    container: "70rem"
  },

  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      regular: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      medium: "1rem", // 16px
      large: "1.125rem", // 18px
      xlarge: "1.25rem", // 20px
      xxlarge: "1.75rem" // 28px
    }
  },

  colors: {
    white: "#FFFFFF",

    gray50: "#f7f8fa",
    gray800: "#494d4b",

    green500: "#00DC90",

    red500: "#F16165",

    purple300: "#9f75ff",
    purple400: "#9164fa",
    purple500: "#8257e5",
    purple800: "#6f48c9"
  }
} as const;

export default theme;
