import { useState, useEffect } from "react";
import { getLatest } from "../../service/ApiRequests";
import "bootstrap/dist/css/bootstrap.min.css";

function Latest() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    getLatest().then((res) => {
      setLatest(res);
    });
  }, []);

  return (
      <div className="container">
        {latest.original_title}
        {latest.overview}
      </div>
  );
}

export default Latest;
