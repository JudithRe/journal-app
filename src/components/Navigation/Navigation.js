export default function Navigation({
  onShowAllEntries,
  onShowFavoriteEntries,
  filter = "all",
  allCount,
  favoriteCount,
}) {
  return (
    <ul class="navigation">
      <li>
        <button
          className={`nav__link nav__link--${filter === "all" ? "active" : ""}`}
          onClick={onShowAllEntries}
        >
          All Entries
        </button>
        <span
          className={`nav__counter nav__counter--${
            filter === "all" ? "active" : ""
          }`}
        >
          {allCount}
        </span>
      </li>
      <li>
        <button
          className={`nav__link nav__link--${
            filter === "favorites" ? "active" : ""
          }`}
          onClick={onShowFavoriteEntries}
        >
          Favourites
        </button>
        <span
          className={`nav__counter nav__counter--${
            filter === "favorites" ? "active" : ""
          }`}
        >
          {favoriteCount}
        </span>
      </li>
    </ul>
  );
}
