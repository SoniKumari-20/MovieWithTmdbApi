import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

export default function GenresLoader() {
  return (
      <Box
        sx={{
          // Height: "85%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: "1.5% ",
          position: "static",
        }}
      >
        <Box sx={{ width: 400, marginLeft: "15%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
        <Box sx={{ width: 400, marginLeft: "15%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      </Box>
  );
}
