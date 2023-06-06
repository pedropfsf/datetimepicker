import {
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.red,
      secondary: baseTheme.colors.green,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);
