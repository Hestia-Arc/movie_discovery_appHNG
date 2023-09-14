import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "black",
  color: "#fff",
  border: "2px solid #000",
  boxShadow: 4,
  p: 4,
  display: 'flex'
};

function SearchModal(props) {
  const { title, poster_path, release_date } = props.item;
  return (
    <>
      <Backdrop
        sx={{
          bgcolor: "rgba(232,  232,  232,  0.03)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={props.open}
        onClick={props.onClose}
      >
        <Card sx={style}>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 3 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography
                component="div"
                // sx={{ color: "#fff" }}
              >
                {release_date}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 280 }}
            image={"https://image.tmdb.org/t/p/w200" + poster_path}
            alt="movie cover"
          />
        </Card>
      </Backdrop>
    </>
  );
}

export default SearchModal;
