import { Box, Stack, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";


function MovieDetail() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  const getDetail = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2352957460dd7eafd8fea42907b09cad&language=en-US`
    );
    const theDetail = await data.json();

    console.log(theDetail);
    setMovie(theDetail);
  };

  useEffect(() => {
    getDetail();
  }, []);

  const Detail = styled(Stack)({
    width: "100%",
    padding: "20px 100px 200px 30px ",
    
  });

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Detail>
        <Box
          sx={{
            height: 500,
            borderRadius: 6,
            
            // backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.poster_path})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="movie poster"
            style={{maxWidth: '100%', maxHeight: '100%'}}
          />
        </Box>
        <Typography variant="h3" sx={{ margin: "25px 0" }}>
          {movie.title}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "25px" }}>
          Release Date: {movie.release_date}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "25px" }}>
          Runtime: {movie.runtime}{" "}
        </Typography>

        <Box>
        <Typography variant="h5" sx={{ marginBottom: "5px" }}>
          Overview: 
        </Typography>
        <Typography variant="h7" sx={{ marginBottom: "25px", padding: '30px', lineHeight: 2 }}>
          {movie.overview}{" "}
        </Typography>

        </Box>
        
      </Detail>
    </Box>
  );
}

export default MovieDetail;
