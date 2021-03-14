import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Home from "./components/Home/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#023C5A",
    },
    secondary: {
      main: "#F8537D",
    },
  },
});

function App() {
  return (
    <div style={{ background: "#EEF9FE" }}>
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
