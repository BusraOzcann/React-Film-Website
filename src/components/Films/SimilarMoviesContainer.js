import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSimilarsHead } from "../../service/ApiRequests";
import SmallCard from "../SmallCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

function SimilarMoviesContainer({id}) {
  const [similars, setSimilars] = useState([]);

  const navigate = useNavigate();

  const callApi = () => {
    getSimilarsHead(id, 1).then((res) => {
      setSimilars(res);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="row mt-5 pt-1" style={{ backgroundColor: "#e5e6ee" }}>
      <div className="row">
        <div className="col">
          <p>Benzer Filmler</p>
        </div>
        <div className="col">
          <button className="float-end" onClick={() => {navigate(`/similars/${id}`)}}>Daha fazlası</button>
        </div>
      </div>
      <div className="row">
        {similars.map((result, index) => {
          return (
            <SmallCard
              key={index}
              id={result["id"]}
              name={result["title"]}
              image={`https://image.tmdb.org/t/p/w500/${result["poster_path"]}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SimilarMoviesContainer;
