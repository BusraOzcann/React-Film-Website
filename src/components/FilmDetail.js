import React from "react";
import { useParams } from "react-router-dom";
import SimilarMoviesContainer from "./Films/SimilarMoviesContainer"
import { useState, useEffect } from "react";
import { getFilmWithID } from "../service/ApiRequests";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Image } from "antd";
import "./style.css";

function FilmDetail() {
  const { id } = useParams();

  const [film, setFilm] = useState([]);

  const callApi = () => {
    getFilmWithID(id).then((res) => {
      setFilm(res);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="container mt-2 pt-2 mb-2">
        <div className="row">
          <div className="col-sm-12 col-md-3 ">
            <Image
              className="img-fluid"
              width={250}
              src={`https://image.tmdb.org/t/p/w500/${film["poster_path"]}`}
            />
          </div>
          <div className="col-sm-12 col-md-9 d-flex justify-content-start ">
            <div className="row">
              <div className="col">
                <h5 className="text-uppercase font-weight-bold">
                  {film["title"]}
                </h5>
                <div>
                  <p className="btn btn-success btn-sm ">
                    IMDB : {film["vote_average"]}
                  </p>
                  <p className="btn btn-primary btn-sm mx-2">
                    Süre : {film["runtime"]} Dakika
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  {film["genres"] == null
                    ? "..."
                    : film["genres"]
                        .map((element) => {
                          return element.name;
                        })
                        .join(", ")}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="">{film["tagline"]}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="">{film["overview"]}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="">Gösterim Tarihi : {film["release_date"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {film["id"] != null ? <SimilarMoviesContainer id={film["id"]} /> : "..."}
      </div>
    </>
  );
}

export default FilmDetail;
