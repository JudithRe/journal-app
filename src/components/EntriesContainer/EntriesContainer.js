import Entry from "../Entry/Entry";

export default function EntriesContainer({ entries, onToggleFavorite }) {
  return (
    <section className="entries-container">
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          date={entry.date}
          motto={entry.motto}
          notes={entry.notes}
          onToggleFavorite={onToggleFavorite}
          isFavorite={entry.isFavorite}
          id={entry.id}
        />
      ))}
    </section>
  );
}
