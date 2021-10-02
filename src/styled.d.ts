import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
      colors: {
        blue: string,
        blueLight: string,
        gray: string,
      },
      font: string,
      fontSize: {
        small: string,
        medium: string,
        large: string,
      },
  }
}
