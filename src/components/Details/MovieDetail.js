import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ListOutlined } from "@mui/icons-material";
import Ticket from "../../images/Two Tickets.svg";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FadeLoader from "react-spinners/FadeLoader";

const Detail = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: "20px 20px 200px 20px ",
  [theme.breakpoints.up("xs")]: {
   
    
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },

  [theme.breakpoints.up("md")]: {
  
  },
  [theme.breakpoints.up("lg")]: {
    
  },
}));

const TextEl = styled("div")({
  fontSize: "16px",
  marginBottom: "12px",
  fontFamily: "Fredoka",
});

const ButtonEl = styled(Button)({
  fontSize: "16px",
  fontFamily: "Fredoka",
  marginBottom: "12px",
  padding: "14px 20px",
  width: "100%",
  backgroundColor: "#BE123C",
  color: "#fff",
  borderRadius: 7,
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "rgba(190, 18, 60, 0.8)",
  },
});

function MovieDetail() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const { title, backdrop_path, release_date, runtime, overview } = movie;

  const { id } = useParams();

  const getDetail = async () => {
    setLoading(true);

    try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2352957460dd7eafd8fea42907b09cad&language=en-US`
    );
    const theDetail = await data.json();

    console.log(theDetail);
    setMovie(theDetail);
    setGenres(theDetail.genres);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Detail>
        {loading ? 
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
      : 
        (<>

     
        <Box
          sx={{
            minHeight: 500,
            borderRadius: 2,
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "grey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "rgba(232, 232, 232, 0.22)",
              width: 120,
              height: 120,
            }}
            alt="play button"
          >
            <PlayArrowRoundedIcon sx={{ fontSize: 90 }} />
          </Avatar>
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontFamily: "Fredoka",
              marginTop: 2,
              fontWeight: 500,
              color: "rgba(232, 232, 232, 1)",
            }}
          >
            Watch Trailer
          </Typography>
        </Box>

        {/* --------------------------------- */}
        {/* DETAILS */}
        {/* ---------------------------------- */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ marginTop: "60px" }}
        >
          <Box sx={{ flex: 5 }}>
            <Stack
             direction={{ xs: 'column', sm: 'row' }}
              sx={{
                
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <Typography variant="h4" data-testid="movie-title">
                {title}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ marginLeft: {xs: 0, sm: 5}, marginTop: {xs: 1} }}>
                {genres.map((genre) => {
                  return (
                    <Chip
                      size="small"
                      sx={{ backgroundColor: "rgba(190, 18, 60, 0.1)" }}
                      label={genre.name}
                      variant="outlined"
                    />
                  );
                })}

                {/* <Chip label="Chip Outlined" variant="outlined"/> */}
              </Stack>
            </Stack>
            <TextEl data-testid="movie-release-date">
              Release Date: {release_date}
            </TextEl>
            <TextEl data-testid="movie-runtime">
              Runtime: {runtime} minutes{" "}
            </TextEl>

            <Box>
              <TextEl
                variant="h7"
                component="div"
                sx={{
                  width: "90px",
                  borderBottom: "1px solid #BE123C",
                  marginBottom: "2px",
                }}
              >
                Overview
              </TextEl>
              <TextEl
                data-testid="movie-overview"
                variant="h8"
                sx={{
                  
                  marginBottom: "15px",
                  padding: {xs: '10px 0', sm: "5px 50px 30px 10px", md: "5px 80px 30px 10px",},
                  lineHeight: 1.5,
                }}
              >
                {overview}{" "}
              </TextEl>
            </Box>
          </Box>

          {/* -------------------- */}
          {/* SIDE DETAIL */}
          {/* ------------------------ */}
          <Box sx={{ flex: 2 }}>
            <ButtonEl>
              {/* <LocalMovies /> */}
              <img src={Ticket} alt="icon" />
              <Typography> See Showtimes</Typography>
            </ButtonEl>

            <ButtonEl
              sx={{
                border: "1px solid  #BE123C",
                backgroundColor: "rgba(190, 18, 60, 0.1)",
                color: "rgba(51, 51, 51, 1)",
              }}
            >
              <ListOutlined />
              <Typography>More watch options</Typography>
            </ButtonEl>
          </Box>
        </Stack>
        </>
         ) }
      </Detail>
    </Box>
  );
}

export default MovieDetail;
