import * as React from "react";
import {  Box,Card,
  CardHeader,
  CardMedia, Pagination,
  Stack,
} from './AllData/MuiModules'
import "./style.css";
import { MyContext } from "../Context/Mainprovider";
import { Link } from "react-router-dom";
import CardLoader from "./Loader/CardLoader";

export default function MovieCard() {
  const { filterData, loader, setPage, totalpage, page, setMovieId } =
    React.useContext(MyContext);
  const handle_page_data = (e) => {
    setPage(e);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "4%",
          marginTop: "20px",
        }}
      >
        {loader === true ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <CardLoader />
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </Box>
          </>
        ) : (
          <>
            {filterData?.map((elm, id) => (
              <Box key={id} className="Card_onHover">
                <Link to={`${elm.id}`}>
                  <Card
                    sx={{
                      maxWidth: 230,
                      maxHeight: 240,
                      margin: "8px",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                    onClick={() => setMovieId(elm?.id)}
                  >
                    <CardMedia
                      component="img"
                      height="150px"
                      width="154px"
                      image={
                        elm?.backdrop_path
                          ? `https://image.tmdb.org/t/p/original${elm?.backdrop_path}`
                          : "https://img.freepik.com/premium-photo/3d-404-page-with-astronaut_407989-57.jpg?w=500"
                      }
                      alt="movie"
                    ></CardMedia>
                    <CardHeader
                      sx={{ textAlign: "left" }}
                      title={elm?.original_title}
                      titleTypographyProps={{
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                      subheader={(elm?.overview).substring(0, 18) + "..."}
                      subheaderTypographyProps={{ fontSize: "12px" }}
                    />
                  </Card>
                </Link>
              </Box>
            ))}
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={4}>
          <Pagination
            count={totalpage > 100 ? 100 : totalpage}
            onClick={(e) => handle_page_data(e.target.textContent)}
            color="primary"
            hidePrevButton
            hideNextButton
            page={parseInt(page) ? parseInt(page) : 1}
          />
        </Stack>
      </Box>
    </>
  );
}
