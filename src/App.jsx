import { useState } from 'react';
import { Button } from "./Components/Styled/Button.styled";
import GlobalStyle from "./Components/Styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Button2 } from './Components/Styled/Button2.styled';

const theme = {
  main: "mediumseagreen"
};

const darkTheme = {
    main: "#000000",
};

const lightTheme = {
    main: "#F5F5F5",
};

function App() {
  const [theme, setTheme] = useState(lightTheme)
  return (
      <div className="App">
          <Button2
              onClick={() =>
                  setTheme(theme === lightTheme ? darkTheme : lightTheme)
              }
          >
              Cambia el color
          </Button2>
          <Button2>Prueba</Button2>

          <ThemeProvider theme={theme}>
              <GlobalStyle />
              {/* <Button>Themed</Button> */}
              <Button2>Prueba</Button2>
          </ThemeProvider>
      </div>
  );
}

export default App;
