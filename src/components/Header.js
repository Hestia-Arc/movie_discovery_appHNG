import React from "react";
import { Box, Stack, Button, Typography, styled } from "@mui/material";
import Tv from "../images/tv.svg";
import Poster from "../images/Poster.png";
import Menu from "../images/Menu.png";
import Play1 from "../images/Play1.svg";
import SearchBox from "./SearchBox";

// ----------BREAKPOINTS
//   xs: 0,
//   sm: 600,
//   md: 900,
//   lg: 1200,
//   xl: 1536,

//   ---------
//   mobile: 0,
//   tablet: 640,
//   laptop: 1024,
//   desktop: 1200,

// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

const AppHeader = styled(Stack)(({ theme }) => ({
  height: "700px",
  backgroundImage: `url(${Poster})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "0px 100px",
  color: "#fff",
  display: "flex",
  [theme.breakpoints.only("xs")]: {
    padding: "0px 10px",
    height: "568px",
  },

  [theme.breakpoints.between("sm", "md")]: {
    padding: "0px 30px",
    height: "568px",
  },

  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const NavBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 18,
  height: 60,
});

const ButtonEl = styled(Button)({
  // justifyContent: 'flex-start',
  backgroundColor: "#BE123C",
  color: "#fff",
  width: 210,
  borderRadius: 9,
  textTransform: "uppercase",
});

function Header() {
  return (
    <AppHeader justifyContent="space-between">
      <NavBar>
        <IconContainer>
          <img
            src={Tv}
            style={{ height: 50, width: 50, marginRight: 10 }}
            alt="app logo"
          />
          <Typography variant="h6">MovieBox</Typography>
        </IconContainer>

        <SearchBox />

        <IconContainer>
          <Typography variant="h6">Sign In</Typography>
          <img
            src={Menu}
            style={{ height: 50, width: 50, marginLeft: 10 }}
            alt="menu"
          />
        </IconContainer>
      </NavBar>

      <Stack
        spacing={2.5}
        sx={{
          height: "70%",
          width: { xs: "100%", sm: "50%", md: "38%" },
          wordBreak: "break-word",
        }}
      >
        <Typography variant="h3" component="div">
          John Wick 3 : <br /> Parabellum
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: { xs: 400 } }}>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </Typography>

        <ButtonEl>
          <img
            src={Play1}
            style={{ height: 30, width: 30, marginRight: 4 }}
            alt="play"
          />
          <Typography sx={{ fontWeight: 500 }}>Watch Trailer</Typography>
        </ButtonEl>
      </Stack>
    </AppHeader>
  );
}

export default Header;
