import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";

const FooterContent = styled(Stack)(({ theme }) => ({
  padding: "20px 100px",
  height: "200px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    padding: "0px 10px"
  },

  [theme.breakpoints.up("sm")]: {
  
  },

  [theme.breakpoints.up("md")]: {
  
  },
  [theme.breakpoints.up("lg")]: {
    
  },
}));

const ImgEl = styled("img")({
  // padding: 'px',
  height: "30px",
});

const FooterLink = styled("div")(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 500,
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "18px",
    textAlign: 'center'
  },

  [theme.breakpoints.up("sm")]: {
  
  },

  [theme.breakpoints.up("md")]: {
  
  },
  [theme.breakpoints.up("lg")]: {
    
  },
}));

function Footer() {
  return (
    <FooterContent spacing={4}>
      <Stack direction="row" spacing={5}>
        <ImgEl src={Facebook} alt="icon" />
        <ImgEl src={Instagram} alt="icon" />
        <ImgEl src={Twitter} alt="icon" />
        <ImgEl src={Youtube} alt="icon" />
      </Stack>

      <Stack direction="row" spacing={5}>
        <FooterLink>Conditions of Use</FooterLink>
        <FooterLink>Privacy & Policy</FooterLink>
        <FooterLink>Press Room</FooterLink>
      </Stack>

      <Box>
        <Typography variant="h6" sx={{ color: "rgba(51, 51, 51, 0.9)" }}>
          2023 MovieBox by Hestia(Logic_Dev)
        </Typography>
      </Box>
    </FooterContent>
  );
}

export default Footer;
