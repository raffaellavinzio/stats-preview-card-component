import { createGlobalStyle } from "styled-components/macro"

/* locally hosted google fonts for Red Hat Dispaly 500, 700, 900 */
// CC-in-JS path is not available in runtime
import Inter from "../../fonts/Inter.woff2"
import LexendLeca from "../../fonts/LexendLeca.woff2"

import { COLORS, WEIGHTS } from "../../constants"

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
    font-size: 100%;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
	content: none;
}

table {
    border-collapse: collapse;
	border-spacing: 0;
}

/* GLOBAL STYLES */

/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${Inter}) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url(${Inter}) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  src: url(${LexendLeca}) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}



html {
    --font-sans-serif-stat: 'Inter', -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
      helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
    --font-sans-serif-main: 'Lexend Deca', -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
      helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
    --font-serif:
      Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
      Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol;
      
    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};

    --font-size-body: calc(15 / 16 * 1rem);

    --color-white: ${COLORS.white};
    --color-trasparent-white-main: ${COLORS.trasparentWhiteMain};
    --color-trasparent-white-stat: ${COLORS.trasparentWhiteStat};
    --color-primary-soft-violet: ${COLORS.primarySoftViolet};
    --color-primary-dark-desaturated-blue: ${COLORS.primaryDarkDesaturatedBlue};
    --color-primary-very-dark-blue: ${COLORS.primaryveryDarkBlue};
      
}

*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: var(--font-sans-serif-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}

html {
  /* Set a global default */
  font-family: var(--font-sans-serif);
}
`

export default GlobalStyles
