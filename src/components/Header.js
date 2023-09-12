import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { Stack } from "@mui/system";
import Tv from "../images/tv.svg";
import Poster from "../images/Poster.png";
import Menu from "../images/Menu.png";
import Play from "../images/Play.svg";
import SearchBox from "./SearchBox";

const AppHeader = styled("header")({
  height: "700px",
  backgroundImage: `url(${Poster})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "0px 100px",
  color: "#fff",
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const NavBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
function Header() {
  return (
    <AppHeader>
      <NavBar>
        <IconContainer>
          <img src={Tv} style={{ height: 50, width: 50 }} alt="app logo" />
          <Typography variant="h6">MovieBox</Typography>
        </IconContainer>

        <SearchBox />

        <IconContainer>
          <Typography variant="h6">Sign In</Typography>
          <img src={Menu} style={{ height: 50, width: 50 }} alt="menu" />
        </IconContainer>
      </NavBar>

      <Stack>
        <Typography variant="h3">
          John Wick 3 : <br /> Parabellum
        </Typography>
        <Typography variant="h6">
          John Wick is on the run after killing a member <br />
          of the international assassins' guild, and with<br />
           a $14 million price tag on his head, he is the <br />
           target of hit men and women everywhere.
        </Typography>

        <Button>
        <img src={Play} style={{ height: 50, width: 50 }} alt="play" />
            <Typography>Watch Trailer</Typography></Button>
      </Stack>
    </AppHeader>
  );
}

export default Header;
