import { createGlobalStyle } from "styled-components";

import OpenSansRegular from "./open-sans-v17-latin-regular.woff2";
import OpenSansBold from "./open-sans-v17-latin-600.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: local("Open Sans Regular"), local("OpenSans-Regular"), url(${OpenSansRegular}) format("woff2");
  }
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url(${OpenSansBold}) format("woff2");
  }
`;
