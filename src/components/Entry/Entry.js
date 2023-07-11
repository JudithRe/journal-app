import FilledStar from "./assets/star-filled";
import Star from "./assets/star.js";

export default function Entry({
  date,
  motto,
  notes,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <article className="entry">
      <div className="entry__date">
        <p>{date}</p>
      </div>
      <div className="entry__heading-container">
        <h2 className="entry__heading">"{motto}"</h2>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          id={id}
        />
      </div>
      <p>{notes}</p>
    </article>
  );
}

function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  return (
    <button
      className="entry__bookmark-icon"
      onClick={() => onToggleFavorite(id)}
    >
      {isFavorite ? <FilledStar /> : <Star />}
    </button>
  );
}
