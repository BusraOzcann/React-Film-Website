import { useState, useEffect } from "react";
import { getNowPlaying } from "../../service/ApiRequests";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import "../style.css";
import FilmCard from "../FilmCard";

let page = 1;

function NowPlaying() {
  const [playing, setPlaying] = useState([]);

  const callApi = () => {
    console.log(page);
    getNowPlaying(page).then((res) => {
      setPlaying(playing.concat(res.results));
    });
  };

  useEffect(() => {
    getNowPlaying(page).then((res) => {
      setPlaying(res.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {playing.map((result, index) => {
          return (
            <FilmCard
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

export default NowPlaying;
