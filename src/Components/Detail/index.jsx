import * as React from "react";
import {
  Card,
  CardActions,
  Button,
  Rating,
  Stack,
  CardContent,
  Box,
  Typography,
} from "../AllData/MuiModules";
import { MyContext } from "../../Context/Mainprovider";
import { Link } from "react-router-dom";
import GenresLoader from "../Loader/GenresLoader";

export default function BasicCard() {
  const { detailPage, loader } = React.useContext(MyContext);
  return (
    <>
      <Box
        sx={{
          marginTop: "-10px",
        }}
      >
        {loader === true ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "15%",
              }}
            >
                <GenresLoader />
            </Box>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "2%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  marginRight: "5px",
                  width: "70%",
                }}
              >
                <img
                  src={
                    detailPage?.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${detailPage?.backdrop_path}`
                      : "https://img.freepik.com/premium-photo/3d-404-page-with-astronaut_407989-57.jpg?w=300"
                  }
                  height="95%"
                  width="90%"
                ></img>
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  borderRadius: "12px",
                  width: "50%",
                  padding: "15px",
                }}
              >
                <Card
                  variant="outlined"
                  sx={{ backgroundColor: " rgb(29 29 93)", color: "white" }}
                >
                  <React.Fragment>
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="rgb(250, 195, 216)"
                        component="div"
                      >
                        {detailPage?.original_title}
                      </Typography>
                      <br />
                      <Typography variant="span">
                        {detailPage?.overview}
                        <br />
                        <br />
                      </Typography>
                      <Typography fontSize="12px">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating"
                            defaultValue={detailPage?.vote_average}
                            readOnly
                          />
                        </Stack>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="/">
                        <Button
                          size="small"
                          sx={{
                            backgroundColor: "white",
                            color: "black",
                          }}
                        >
                          Back To Home
                        </Button>
                      </Link>
                    </CardActions>
                  </React.Fragment>
                </Card>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
