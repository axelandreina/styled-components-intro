import styled from "styled-components";

// export const Button = styled.button`
//     font-size: 40px;
//     color: ${(props) => props.color};
//     cursor: pointer;
//     border: 1.5px solid gray;
//     border-radius: 7px;
//     background-color: ${(props) => props.background || "blue"};
//     margin-right: 10px;

//     &:hover {
//         background-color: #6a0f6a;
//         color: #fc59fc91;
//     }
// `;

// Define our button, but with the use of props.theme this time
export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// Define what props.theme will look like
// const theme = {
//   main: "mediumseagreen"
// };
