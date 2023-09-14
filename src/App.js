import React from "react";
import "./App.css";
// import {  ThemeProvider} from "@/mui/material";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/Details/MovieDetail";
import Home from "./components/Home/Home";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./theme";




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
