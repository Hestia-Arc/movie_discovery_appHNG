import {
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
  height: "595px",
  width: "350px",
  background: 'rgba(51, 52, 51, 0.2)',
  transition: "transform .2s",
  "&:hover": {
    background: "rgba(19, 18, 60, 0.1)",
    transform: "scale(1.1)",
    boxShadow: "3px 3px 15px 5px rgba(51, 51, 51, 0.2)",
  },
});

function Main() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
        // const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`);

    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2352957460dd7eafd8fea42907b09cad&language=en-US&page=1');
  //  {/*fetching data from API in JSON Format */}
    const theMovies = await data.json(); 
    console.log(theMovies.results ); 
    setMovies(theMovies.results);

  }

  useEffect(() => {
     getMovies();
  },[]);


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
                  <MovieCard id={id}>
                    <CardMedia
                      height="70%"
                      component="img"
                      image={"https://image.tmdb.org/t/p/w500" + poster_path}
                      alt="icon"
                      sx={{ perspective: 1000 }}
                    />

                    <CardContent sx={{ flexDirection: "column" }}>
                      <Typography variant="h8" component={"div"}>
                        {title}
                      </Typography>

                      <Typography
                        variant="h8"
                        component={"div"}
                        sx={{ margin: "10px 0" }}
                      >
                        {release_date}
                      </Typography>
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
