import { useNavigate } from "react-router-dom";
import "./style.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

const { Meta } = Card;
function FilmCard({ id, name, image, imdb, description }) {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-4 col-lg-3">
      <Card
        onClick={() => {
          navigate(`/detail/${id}`)
        }}
        hoverable
        bordered={true}
        className="film-card text-overflow"
        cover={<img alt="poster" className="card-image img-fluid" src={image} />}
      >
        <Meta title={name} />
        <button className="btn btn-dark mt-2" style={{ borderRadius: "8px" }}>
          {`IMDB - ${imdb}`}
        </button>
      </Card>
    </div>
  );
}

export default FilmCard;
