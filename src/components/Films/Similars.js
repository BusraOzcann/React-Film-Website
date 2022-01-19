import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSimilarMovies } from "../../service/ApiRequests";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import "../style.css";
import FilmCard from "../FilmCard";

let page = 1;

function Similars() {
  const { id } = useParams();

  const [similars, setSimilars] = useState([]);

  const callApi = () => {
    getSimilarMovies(id, page).then((res) => {
      setSimilars(similars.concat(res.results));
    });
  };

  useEffect(() => {
    getSimilarMovies(id, page).then((res) => {
      setSimilars(res.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {similars.map((result, index) => {
          return (
            <FilmCard
              id={result["id"]}
              key={index}
              name={result["title"]}
              image={`https://image.tmdb.org/t/p/w500/${result["poster_path"]}`}
              description={result["overview"]}
              imdb={result["vote_average"]}
            />
          );
        })}
      </div>
      <Button
        variant="outlined"
        className="movie-btn"
        onClick={() => {
          page = page + 1;
          callApi(page);
        }}
      >
        DAHA FAZLASI
      </Button>
    </div>
  );
}

export default Similars;
