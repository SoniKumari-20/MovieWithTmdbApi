import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

export default function CardLoader() {
  return (
    <div>
      <Box sx={{width: "10%", margin:"10px"}}>
        <Skeleton variant="rectangular" width={250} height={118} />
        <Skeleton width={100} />
        <Skeleton width={210} />
      </Box>
      </div>
  );
}
