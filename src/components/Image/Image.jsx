import { Link } from "react-router-dom";
import "./Image.css"

export function Image({ image, id }) {
  return (
    <div className="imageContainer">

      <Link to={`/Image/${id}`}>

        <div>
          <img className="ImageClass" src={image} />
        </div>
      </Link>

    </div>
  );
}
