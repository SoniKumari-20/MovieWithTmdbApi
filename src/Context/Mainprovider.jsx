import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { options, url } from "./index";
export const MyContext = createContext();

const Mainprovider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [allMovie, setAllMovie] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tvCategory, setTvCategory] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState();
  const [showAboutData, setShowaboutData] = useState(false);
  const [search, setSearch] = useState("");
  const [movieId, setMovieId] = useState(null);
  const [detailPage, setDetailPage] = useState("");
  const [handletype, sethandletype] = useState(false);
  const fetchMovieData = async (movieParam = "") => {
    sethandletype(true);
    {
      try {
        setLoader(true);
          const response = await axios.get(url + movieParam, options);
          setFilterData(response.data.results);
          setAllMovie(response.data.results);
          setTotalPage(100);
          sethandletype(true);
      } catch (error) {
        console.log(error);
      }finally{
        setLoader(false)
      }
    }
  };
  const fetchTvData = async () => {
    setLoader(true);
    sethandletype(true);
    {
      try {
        const response = await axios.get(
          url + `/discover/tv?page=${page}`,
          options
        );
        setFilterData(response.data.results);
        setAllMovie(response.data.results);
        setLoader(false);
        setTotalPage(100);
        sethandletype(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const Moviegenre = async (moviegenre) => {
    setLoader(true);
    {
      try {
        const response = await axios.get(url + moviegenre, options);
        setCategories(response.data.genres);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const Tvgenre = async (tvgenre) => {
    setLoader(true);
    {
      try {
        const response = await axios.get(url + tvgenre, options );
        setTvCategory(response.data.genres);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const DetailMoviePage = async () => {
    {
      try {
        setLoader(true)
        const response = await axios.get(url + `/movie/${movieId}`, options);
        setDetailPage(response.data);
        console.log(response)
        setLoader(false)
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    if(movieId) {
      DetailMoviePage();
    }
  }, [movieId]);
  return (
    <MyContext.Provider
      value={{
        allMovie,
        tvCategory,
       fetchMovieData,
        sethandletype,
        fetchTvData,
        handletype,
        categories,
        search,
        setSearch,
        filterData,
        setFilterData,
        loader,
        setLoader,
        fetchTvData,
        setPage,
        page,
        totalpage,
        showAboutData,
        setShowaboutData,
        Moviegenre,
        Tvgenre,
        movieId,
        setMovieId,
        detailPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default Mainprovider;
