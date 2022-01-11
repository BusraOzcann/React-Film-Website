import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY ;

export const getPopulars = (page) => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=tr-Tr&page=${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
};

export const getLatest = () => {
  const URL = `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=tr-Tr`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
};

export const getNowPlaying = (page) => {
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=tr-Tr&${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
};


export const getFilmWithID = (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=tr-Tr`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
};
