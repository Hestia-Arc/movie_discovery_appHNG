import React from "react";
import "./App.css";
import {  ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/Details/MovieDetail";
import Home from "./components/Home/Home";
import { Box } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Fredoka", "sans-serif"].join(","),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
