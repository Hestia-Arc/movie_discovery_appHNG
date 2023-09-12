import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/Details/MovieDetail";
import Home from "./components/Home/Home";

function App() {
  

  return (
    <Box className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
