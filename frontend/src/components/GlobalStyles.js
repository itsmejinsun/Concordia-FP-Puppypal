import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
/* color */
  --main-background-color: #f4f4f8;
  --nav-background-color: #fef0ed;
  --nav-selected-color: #f9d1c8;
  --main-font-color: #36282e;
  --button-color-primary: #f7673b;
  --button-color-secondary: #5386e4;
  --input-color-primary: #fee0d8;
/* font */
  --logo-font: 'Righteous', cursive;
  --main-font: 'Poppins', sans-serif;
}

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
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {

      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      vertical-align: baseline;
      color: var(--main-font-color);
      font-family: var(--main-font);
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      display: flex;
      justify-content: center;

  }
  ol, ul {
      list-style: none;
  }
  a {
      color: inherit;
      text-decoration: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

#root {
    background-color: #fff;
    max-width: 1600px;
    min-width: 480px;
    width: 100%;
    position: relative;
}
`;
