
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Home from "../../images/Home.svg";
import Tv from "../../images/TV Show.svg";
import Calender from "../../images/Calendar.svg";
import Projector from "../../images/Movie Projector.svg";
import Logout from "../../images/Logout.svg";


const drawerWidth = 240;

// color1 = #BE123C
// color light = rgba(190, 18, 60, 0.1)
// desc text color = rgba(51, 51, 51, 1)
// header color = rgba(64, 64, 64, 1)

const lists = [
  { text: "Home", icon: Home },
  { text: "Movies", icon: Projector },
  { text: "Tv Series", icon: Tv },
  { text: "Upcoming", icon: Calender },
];

const SideBox = styled(Box)({
    margin: '0px 20px',
    padding: '12px',
    background: 'rgba(190, 18, 60, 0.1)',
    border: '1px solid #BE123C',
    borderRadius: 25,
})

function Sidebar() {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar/>
        <List>
          {lists.map((list, index) => (
            <ListItem key={list.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={list.icon} alt="icon" />
                </ListItemIcon>
                <ListItemText primary={list.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <Toolbar/>
        <SideBox>
          <Typography variant="h8" component='div'>Play movies quizes <br/> and earn <br/> free tickets</Typography>
          <small style={{display: 'block', margin: '20px 0'}}>50k people are playing now</small>
          <Button sx={{textTransform: 'capitalize', background: 'rgba(190, 18, 60, 0.1)',color: '#BE123C', borderRadius: 10, padding: 1}}>Start playing</Button>
        </SideBox>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={Logout} alt="icon" />
              </ListItemIcon>
              <ListItemText primary="LogOut" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
