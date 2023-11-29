import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
  FacebookOutlinedIcon,
  InstagramIcon,
  YouTubeIcon,
  TwitterIcon,
  PinterestIcon,
  LinkedInIcon,
  CopyrightOutlinedIcon,
  LocationCityIcon,
  MapsHomeWorkIcon,
} from "../AllData/MuiModules";
import "../style.css";
export default function Footer() {
  return (
    <Box sx={{ marginTop: "2%" }}>
      <AppBar
        position="static"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "rgb(44 17 39)",
          height: "50%",
        }}
      >
        <Box sx={{ marginTop: "5%", textAlign: "left", paddingLeft: "2.1%" }}>
          <Typography fontSize="14px" fontWeight="600" paddingTop="10px">
            iTechnology
          </Typography>
        </Box>
        <Box className="footer">
          <Box className="footerItems">
            <Typography fontSize="12px" fontWeight="700" paddingTop="10px">
              Solution
            </Typography>
            <List sx={{ lineHeight: "1.7em" }}>
              <ListItem disablePadding>C Basic Programming</ListItem>
              <ListItem disablePadding>React js Development</ListItem>
              <ListItem disablePadding>Android App Development</ListItem>
            </List>
            <Box sx={{ marginTop: "15%" }}>
              <FacebookOutlinedIcon className="icons" />
              <TwitterIcon className="icons" />
              <LinkedInIcon className="icons" />
              <InstagramIcon className="icons" />
              <PinterestIcon className="icons" />
              <YouTubeIcon className="icons" />
            </Box>
          </Box>
          <Box className="footerItems">
            <Typography fontSize="12px" fontWeight="700" paddingTop="10px">
              Industries
            </Typography>
            <List sx={{ lineHeight: "1.7em" }}>
              <ListItem disablePadding>Healthcare</ListItem>
              <ListItem disablePadding>Sports</ListItem>
              <ListItem disablePadding>Ecommerce</ListItem>
              <ListItem disablePadding>Constructions</ListItem>
              <ListItem disablePadding>Club</ListItem>
            </List>
          </Box>
          <Box className="footerItems">
            <Typography fontSize="12px" fontWeight="700" paddingTop="10px">
              Quick Links
            </Typography>
            <List sx={{ lineHeight: "1.7em" }}>
              <ListItem disablePadding>Reviews</ListItem>
              <ListItem disablePadding>Terms & Conditions</ListItem>
              <ListItem disablePadding>Disclaimer</ListItem>
              <ListItem disablePadding>Site Map</ListItem>
            </List>
          </Box>
          <Box className="footerItems">
            <Typography fontSize="12px" fontWeight="700" paddingTop="10px">
              Stay Connected
            </Typography>
            <List sx={{ lineHeight: "1.7em" }}>
              <ListItem disablePadding>
                <TextField
                  placeholder="Enter email address"
                  disabled
                  size="small"
                  inputProps={{
                    style: {
                      height: "5px",
                      fontSize: "9px",
                      border: "2px solid black",
                      backgroundColor: "lightgray",
                      borderRadius: "5px",
                    },
                  }}
                ></TextField>
              </ListItem>
              <ListItem disablePadding sx={{ marginTop: "1rem" }}>
                Office Location
              </ListItem>
              <ListItem
                disablePadding
                sx={{ lineHeight: "1em", marginTop: "1rem" }}
              >
                <LocationCityIcon />
                <Typography variant="p" marginLeft="3px">
                  Delhi multan road,ludhiana, punjab, 141410{" "}
                </Typography>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ lineHeight: "1em", marginTop: "1rem" }}
              >
                <MapsHomeWorkIcon />
                <Typography variant="p" marginLeft="3px">
                  23##, sher-e-punjab road, punjab, 141410
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ padding: "1%", textAlign: "center", lineHeight: "0.5em" }}>
          <Typography fontSize="12px" fontWeight="300">
            <CopyrightOutlinedIcon fontSize="inherit" /> All Rights Reserved
            2023-2024
          </Typography>
          <Typography fontSize="12px" fontWeight="300">
            Designed By <u> Sharmasoni.com</u>
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
