import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import MiniDrawer from "./miniDrawer";
import MiniBetter from "./miniDrawer2";

import Videos from "./videos.js";

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#fff",
    },
    primary: {
      light: "#ffffff",
      main: "#fafafa",
      dark: "#c7c7c7",
      contrastText: "#000",
    },
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <MiniBetter></MiniBetter>
          <Videos></Videos>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> Made with React </h2>{" "}
          </div>{" "}
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
