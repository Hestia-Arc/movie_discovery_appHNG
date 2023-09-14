import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
      fontFamily: ["Fredoka", "sans-serif"].join(","),
    },
  });
  
  
  theme.typography.h3 = {
    fontSize: '2.5rem',
    fontWeight: 600,
    // '@media (min-width:600px)': {
    //   fontSize: '1.5rem',
    // },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      fontWeight: 500,
      
    },
  };

  theme.typography.h6 = {
    fontSize: '1.2rem',
    // '@media (min-width:600px)': {
    //   fontSize: '1.5rem',
    // },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        lineHeight: 1.2,
        fontWeight: 500,
    },
  };