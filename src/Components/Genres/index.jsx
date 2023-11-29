import React, { useContext, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import "../style.css";
import { MyContext } from "../../Context/Mainprovider";
import MovieCard from "../Card";
import GenresLoader from "../Loader/GenresLoader";

export default function AllGenres() {
  const {
    categories,
    setSearch,
    fetchTvData,
    handletype,
    tvCategory,
    loader,
    setPage,
    fetchMovieData,
    page,
    search,
    Moviegenre,
    Tvgenre,
    movieId,
  } = useContext(MyContext);
  const handleSearchData = (e) => {
    setSearch(e);
    setPage(1);
  };
  useEffect(() => {
    Moviegenre(`/genre/movie/list?`);
    Tvgenre(`/genre/tv/list`);
  }, []);

  const handleArg = () => {
    let secondarg = "";
    if (search == "") {
      secondarg = `/discover/movie?page=${page}`;
    } else {
      secondarg = `/search/movie?query=${search}&page=${page}`;
    }
    fetchMovieData(secondarg);
  };
  useEffect(() => {
    handleArg();
  }, [page, search, movieId]);
  const handledefaultData = (all) => {
   fetchTvData(all);
  };
  return (
    <>
      <Box className="categories_list">
        {loader === true ? (
          <GenresLoader />
        ) : (
          <>
            <Box
              sx={{
                backgroundColor: " rgb(29 29 93)",
                display: " flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                flexDirection: "row",
                paddingBottom: "1.5% ",
              }}
            >
              <Box
                sx={{
                  height: "30px",
                  width: "fit-content",
                  margin: "5px",
                }}
              >
                <Button
                  sx={{
                    height: "30px",
                    marginTop: "8px",
                    backgroundColor: "white",
                    textTransform: "capitalize",
                    color: "black",
                  }}
                  onClick={() => handledefaultData("All")}
                >
                  all
                </Button>
              </Box>
              {handletype ? (
                <>
                  {categories.map((elm, id) => (
                    <Box
                      sx={{
                        height: "30px",
                        width: "fit-content",
                        margin: "5px",
                      }}
                      key={id}
                    >
                      <Button
                        sx={{
                          height: "30px",
                          marginTop: "8px",
                          backgroundColor: "white",
                          textTransform: "capitalize",
                          color: "black",
                        }}
                        onClick={() => {
                          handleSearchData(elm?.name);
                        }}
                      >
                        {elm?.name}
                      </Button>
                    </Box>
                  ))}
                </>
              ) : (
                <>
                  {tvCategory?.map((elm, id) => (
                    <Box
                      sx={{
                        height: "30px",
                        width: "fit-content",
                        margin: "5px",
                      }}
                      key={id}
                    >
                      <Button
                        sx={{
                          height: "30px",
                          marginTop: "8px",
                          backgroundColor: "white",
                          textTransform: "capitalize",
                          color: "black",
                        }}
                        onClick={() => handleSearchData(elm?.name)}
                      >
                        {elm?.name}
                      </Button>
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </>
        )}
      </Box>
      <Box sx={{ alignContent: "center", marginTop: "20px" }}>
        <TextField
          placeholder="Enter movie name"
          size="small"
          inputProps={{
            style: {
              height: "12px",
              fontSize: "14px",
            },
          }}
          sx={{ width: "50%" }}
          onChange={(e) => handleSearchData(e.target.value)}
        ></TextField>
      </Box>
      <Box className="tv_and_movies_banners" variant="div">
        {handletype ? <> MOVIES SERIES </> : <> TV SERIES</>}
      </Box>
      <Box>
        <MovieCard />
      </Box>
    </>
  );
}
