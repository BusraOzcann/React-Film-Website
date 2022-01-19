import "./style.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
function FilmCard({ id, name, image }) {
  const navigate = useNavigate();
  return (
    <div className="col mb-3">
      <Card
        onClick={() => {
          navigate(`/detail/${id}`);
          window.location.reload();
        }}
        hoverable
        bordered={true}
        className="small-card text-overflow "
        cover={<img alt="poster" className="smallcard-image" src={image} />}
      >
        <Meta title={name} />
      </Card>
    </div>
  );
}

export default FilmCard;
