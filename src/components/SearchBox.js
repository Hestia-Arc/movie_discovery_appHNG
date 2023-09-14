import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Search from "../images/Search.svg";

const InputEl = styled("input")({
  padding: "5px 10px",
  width: "87%",
  fontSize: 18,
  outline: "none",
  border: "none",
  height: "70%",
  backgroundColor: "rgba(232,232,232, 0.1)",
  color: "#fff",
  "&::placeholder": {
    color: "#fff",
  },
});

const BoxEl = styled(Box)({
  border: "2px solid grey",
  borderRadius: 8,
  padding: "5px 10px",
  height: 30,
  width: "30%",
  background: "none",
  position: "relative",
  
});



function SearchBox(props) {
  return (
    <BoxEl sx={{display: {xs: 'none', sm: 'block'}}}>
      <form onSubmit={props.handleSubmit}>
        <InputEl
          type="text"
          placeholder="What do you want to watch?"
          // value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
        <button style={{background: 'none', border: 'none', outline: 'none'}} type="submit">
          <img
            src={Search}
            alt="icon"
            style={{ position: "absolute", top: 9, right: 8, height: 30 }}
          />
        </button>
      </form>
    </BoxEl>
  );
}

export default SearchBox;
