import { useState } from "react";
import FilledStar from "./assets/star-filled";
import Star from "./assets/star.js";

export default function Entry({ date, motto, notes }) {
  return (
    <article className="entry">
      <div className="entry__date">
        <p>{date}</p>
      </div>
      <div className="entry__heading-container">
        <h2 className="entry__heading">"{motto}"</h2>
        <FavoriteButton />
      </div>
      <p>{notes}</p>
    </article>
  );
}

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="entry__bookmark-icon"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {isFavorite ? <FilledStar /> : <Star />}
    </button>
  );
}
