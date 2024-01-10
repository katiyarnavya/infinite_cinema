import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HdIcon from '@mui/icons-material/Hd';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100vw", backgroundColor: "#010611", margin: "auto", height: "80px", position: "fixed", bottom: 0}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
            backgroundColor: "#010611", height: "100%",
          "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
             color: "white"
          }
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="MOVIES" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV-SERIES" icon={<HdIcon/>} />
        <BottomNavigationAction label="Search" icon={<SearchIcon/>} />
      </BottomNavigation>
    </Box>
  );
}