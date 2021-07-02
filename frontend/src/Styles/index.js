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
  // Colors
  orange: "#E47D31",
  backgroundLightGrey: "#f8f8f8",
  backgroundWhite: "#FFFFFF",
  backgroundOffGrey: "rgba(0,0,0,0,0.083)",
  textDarkGrey: "#4C4C4C",
  textTabDarkGrey: "#4A4A4A",
  textGrey: "#979797",
  textFooterGrey: "#646363",
  textProfileBlack: "#303030",
  textBlack: "#000000",
  textWhite: "#FFFFFF",
  textRating: "#7E7E7E",
  textRed: "#B00000",
  DetailsGrey: "#D8D8D8",
  DetailsLightGrey: "#EBEBEB",
  RestaurantGrey: "#F5F5F5",
  textareaBorder: "#E3E3E3",
  placeholderColor: "#BBB7B7",
  splitButtonRestColor: "#91919199",

  // Linear Gradients

  // Box Shadows

  // Sizes

  // Text Size
  textSizeL: "30px",
  textSizeM: "20px",
  textSizeSecondTitle: "24px",
  textSizeStandardInput: "22px",
  textSizePostName: "18px",
  textSizeDefault: "16px",
  textSizeS: "14px",
  textSizeXS: "12px",

  // Text Weight
  textWeightThin: "300",
  textWeightRegular: "400",
  textWeightMedium: "500",
  textWeightBold: "700",
};
