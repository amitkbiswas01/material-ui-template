import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Home from "./components/Home/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#2196f3",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
