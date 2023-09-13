import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import { data } from "./dummyData";
import { Link } from "react-router-dom";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
import Tomato from "../images/tomato.svg";
import Imdb from "../images/imdb.svg";

const MainContent = styled("main")({
  padding: "100px",
  minHeight: "400px",
});

const MovieList = styled(Grid)({
  padding: "50px 0px",
  // minHeight: '400px',
});

const MovieCard = styled(Card)({
  padding: "14px",
  minHeight: "595px",
  width: "350px",
  position: "relative",
  background: "rgba(232, 232, 232, 0.22)",
  transition: "transform .2s",
  "&:hover": {
    background: "rgba(232, 232, 232, 0.5)",
    transform: "scale(1.1)",
    boxShadow: "3px 3px 10px 5px rgba(51, 51, 51, 0.2)",
  },
});

function Main() {
  const [favourite, setFavourite] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`);

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2352957460dd7eafd8fea42907b09cad&language=en-US&page=1"
    );
    //  {/*fetching data from API in JSON Format */}
    const theMovies = await data.json();
    console.log(theMovies.results);
    setMovies(theMovies.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MainContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "rgba(64, 64, 64, 1)" }}
        >
          Top Movies
        </Typography>
        <Typography variant="h7" sx={{ color: "#BE123C" }}>
          See more{" "}
        </Typography>
      </Stack>

      <MovieList container spacing={10}>
        {movies.map((movie) => {
          const { id, title, release_date, poster_path } = movie;
          return (
            <Grid item>
              <CardActionArea>
                <Link
                  to={`./${id}`}
                  style={{
                    textDecoration: "none",
                    color: " rgba(64, 64, 64, 1)",
                  }}
                >
                  <MovieCard id={id} data-testid="movie-card">
                    <CardMedia
                      height="70%"
                      component="img"
                      image={"https://image.tmdb.org/t/p/w300" + poster_path}
                      alt="icon"
                      sx={{ perspective: 1000 }}
                      data-testid="movie-poster"
                    />

                    <CardContent sx={{ flexDirection: "column" }}>
                      <Typography
                        data-testid="movie-title"
                        variant="h6"
                        component={"div"}
                        sx={{ fontWeight: 600 }}
                      >
                        {title}
                      </Typography>

                      <Typography
                        data-testid="movie-release-date"
                        variant="h8"
                        component={"div"}
                        sx={{ margin: "10px 0" }}
                      >
                        Release Date: {release_date}
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mb="10px"
                      >
                        <Box>
                          <img src={Imdb} alt="icon" />
                          <span style={{ marginLeft: 7 }}>76.0/100</span>
                        </Box>

                        <Box>
                          <img src={Tomato} alt="icon" />
                          <span style={{ marginLeft: 7 }}>75%</span>
                        </Box>
                      </Stack>

                      <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <Avatar
                          style={{
                            // position: "absolute",
                            // top: 25,
                            // right: 29,
                            // zIndex: 800,
                            backgroundColor: "rgba(232, 232, 232, 0.8)",
                            "&:hover": {
                              backgroundColor: '#BE123C'
                            }
                            // width: 50,
                            // height: 50,
                          }}
                          onClick={() => setFavourite(!favourite)}
                        >
                          {favourite ? (
                            <FavoriteRounded sx={{ color: "#BE123C" }} />
                          ) : (
                            <FavoriteBorderRounded />
                          )}
                        </Avatar>
                      </Box>
                    </CardContent>
                  </MovieCard>
                </Link>
              </CardActionArea>
            </Grid>
          );
        })}
      </MovieList>
    </MainContent>
  );
}

export default Main;
