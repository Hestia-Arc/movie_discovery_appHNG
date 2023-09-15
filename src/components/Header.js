import React, { useEffect, useState } from "react";
import { Box, Stack, Button, Typography, styled, Avatar } from "@mui/material";
import Tv from "../images/tv.svg";
// import Poster from "../images/Poster.png";
import Menu from "../images/Menu.png";
import Play1 from "../images/Play1.svg";
import SearchBox from "./SearchBox";
import FadeLoader from "react-spinners/FadeLoader";
import { CloseRounded } from "@mui/icons-material";
import SearchModal from "./SearchModal";
import MobileSearch from "./MobileSearch";
import Search from "../images/Search.svg";

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
  position: "relative",
});

const ButtonEl = styled(Button)({
  // justifyContent: 'flex-start',
  backgroundColor: "#BE123C",
  color: "#fff",
  width: 210,
  borderRadius: 9,
  textTransform: "uppercase",
});

const RightMenuContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    marginRight: "-38%",
  },
}));

function Header() {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  // -----------
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2352957460dd7eafd8fea42907b09cad&language=en-US&page=1"
    );
    //  {/*fetching data from API in JSON Format */}
    const theMovies = await data.json();
    const randomIndex = Math.floor(Math.random() * theMovies.results.length);
    const randomMovie = theMovies.results[randomIndex];
    // console.log(randomMovie);
    setMovie(randomMovie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const getSearchResult = async (searchValue) => {
    setLoading(true);

    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2352957460dd7eafd8fea42907b09cad&query=${searchValue}&language=en-US`
      );
      //  {/*fetching data from API in JSON Format */}
      const theMovies = await data.json();

      console.log(theMovies.results);

      setSearchList(theMovies.results);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue === "") {
      return;
    }
    setActive(true);
    getSearchResult(searchValue);
  };

  useEffect(() => {}, []);

  return (
    <AppHeader
      justifyContent="space-between"
      sx={{
        background: "rgba(232,222,232,0.1)",
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavBar>
        <IconContainer>
          <img
            src={Tv}
            style={{ height: 50, width: 50, marginRight: 10 }}
            alt="app logo"
          />
          <Typography variant="h6">MovieBox</Typography>
        </IconContainer>

        <SearchBox
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <RightMenuContainer>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Sign In
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <img src={Search} alt="icon" style={{ height: 30 }} />
          </Box>
          <img
            src={Menu}
            style={{ height: 50, width: 50, marginLeft: 10 }}
            alt="menu"
          />
        </RightMenuContainer>

        <MobileSearch />

        <Stack
          spacing={3}
          p={3}
          display={active ? "block" : "none"}
          sx={{
            position: "absolute",
            top: "86%",
            left: "35%",
            bgcolor: "black",
            color: "#fff",
            borderRadius: 3,
            height: "80vh",
            width: "380px",
            overflowY: "scroll",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              height: "30px",
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              bgcolor: "black",
            }}
          >
            <Avatar sx={{ bgcolor: "#BE123C" }}>
              <CloseRounded
                onClick={() => {
                  setActive(false);
                }}
              />
            </Avatar>
          </Box>

          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <FadeLoader
                // loading={loading}
                // size={150}
                // aria-label="Loading Spinner"
                // data-testid="loader"
                color="#36d7b7"
              />
            </Box>
          ) : (
            <>
              {searchList.map((item) => {
                return (
                  <>
                    <Box key={item.id} onClick={handleOpen}>
                      {item.title}
                    </Box>
                    <SearchModal
                      open={open}
                      item={item}
                      onClose={handleClose}
                    />
                  </>
                );
              })}
            </>
          )}
        </Stack>
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
          {movie.title}
          {/* John Wick 3 : <br /> Parabellum */}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: { xs: 400 } }}>
          {movie.overview}
          {/* John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere. */}
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
