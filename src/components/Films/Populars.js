import { useState, useEffect } from "react";
import { getPopulars } from "../../service/ApiRequests";
import FilmCard from "../FilmCard";
import "../style.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

let page = 1;

function Populars() {
  const [populars, setPopulars] = useState([]);

  const callApi = () => {
    getPopulars(page).then((res) => {
      setPopulars(populars.concat(res.results));
    });
  };

  useEffect(() => {
    getPopulars(page).then((res) => {
      setPopulars(res.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {populars.map((result, index) => {
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

export default Populars;
