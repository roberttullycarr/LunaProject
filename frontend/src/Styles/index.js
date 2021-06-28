import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const defaultTheme = {
  // Colors:
  orange: "#E47D31",
  backgroundLightGrey: "#F2F2F2",
  backgroundWhite: "#FFFFFF",
  TextTitleDarkGrey: "#4C4C4C",
  TextTabDarkGrey: "#4A4A4A",
  TextGrey: "#979797",
  TextFooterGrey: "#646363",
  TextProfileBlack: "#303030",
  TextBlack: "#000000",
  TextWhite: "#FFFFFF",
  TextRating: "#7E7E7E",
  separatorGrey: "#EBEBEB",

  // LINEAR GRADIENT
  // linearGradientGradBackground: "linear-gradient(102deg, #c468ff, #6e91f6)",
  // linearGradientGradButton: "linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%)",

  // Box Shadows:
  boxShadowButton: "box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07)",
  boxShadowFriends: "box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05)",

  // Sizes
  // controlHeight: "40px",
  // controlHeightMini: "24px",
  // controlHeightSmall: "32px",
  // controlHeightLarge: "48px",
  // spaceXXS: "4px",
  // spaceXS: "8px",
  // spaceS: "16px",
  // spaceM: "24px",
  // spaceL: "32px",
  // spaceXL: "48px",
  // spaceXXL: "220px",

  // Text Size
  // textSizeXXL: "40px",
  // textSizeXL: "30px",
  textSizeL: "30px",
  textSizeM: "20px",
  // textSizeTab: "20px",
  textSizeSecondTitle: "24px",
  textSizePostName: "18px",
  textSizeDefault: "16px",
  textSizeS: "14px",
  textSizeXS: "12px",
  // textSizeXXS: "10px",

  // Text Weight
  textWeightThin: "300",
  textWeightRegular: "400",
  textWeightMedium: "500",
  textWeightBold: "700",
};
