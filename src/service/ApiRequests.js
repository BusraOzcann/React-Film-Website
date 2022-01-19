import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

export const getPopulars = (page) => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=tr-Tr&page=${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
};

export const getTopRated = (page) => {
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=tr-Tr&page=${page}`;
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

export const getUpcoming = (page) => {
  const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=tr-Tr&page=${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
};

export const getSimilars = (id, page) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US&page=${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
}

export const getSimilarsHead = (id, page) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US&page=${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data["results"].slice(0,5);
  });
  return response;
}

export const getSimilarMovies = (id, page) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US&page=${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data;
  });
  return response;
}
export const getRecommendations = (id, page) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}&language=tr-Tr&page=${page}`;
  const response = axios.get(URL).then((res) => {
    return res.data["results"].slice(0,5);
  });
  return response;
}