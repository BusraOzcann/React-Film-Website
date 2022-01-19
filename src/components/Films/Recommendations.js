import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRecommendations } from "../../service/ApiRequests";
import SmallCard from "../SmallCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

function Recommendations({id}) {
  const [recommendation, setRecommendation] = useState([]);

  const navigate = useNavigate();

  const callApi = () => {
    getRecommendations(id, 1).then((res) => {
        setRecommendation(res);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="row mt-2 pt-1" style={{ backgroundColor: "#e5e6ee", borderRadius:8}}>
      <div className="row">
        <div className="col">
        <p><strong>Sizin İçin Önerilenler</strong></p>
        </div>
      </div>
      <div className="row">
        {recommendation.map((result, index) => {
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

export default Recommendations;
