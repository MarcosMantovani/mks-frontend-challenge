import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  footerWhite: '#EEEEEE',
  blue: '#0F52BA',
  black: '#000000',
  gray: '#2C2C2C',
  priceGray: '#373737'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.black};
  }

  .container {
    max-width: 938px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
