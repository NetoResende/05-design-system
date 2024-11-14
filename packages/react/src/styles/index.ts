import {
  colors,
  fonts,
  fontSizes,
  fonWeights,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: "space",
      width: "space",
    },
    theme: {
      colors: colors,
      fontSizes: fontSizes,
      fontWeights: fonWeights,
      fonts: fonts,
      lineHeights: lineHeights,
      radii: radii,
      space: space,
    },
  });
