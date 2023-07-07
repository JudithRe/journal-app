import { useState } from "react";
import FilledStar from "../../assets/star-filled";
import Star from "../../assets/star.js";

export default function Entry({ motto, notes }) {
  return (
    <article className="entry">
      <div className="entry__date">
        <p>FEB 27, 2028</p>
      </div>
      <h2>"{motto}"</h2>
      <FavouriteButton />
      <p>{notes}</p>
    </article>
  );
}

function FavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <button
      className="entry__bookmark-icon"
      onClick={() => setIsFavourite(!isFavourite)}
    >
      {isFavourite ? <FilledStar /> : <Star />}
    </button>
  );
}
