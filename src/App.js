import "./App.css";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import { uid } from "uid";
import EntriesContainer from "./components/EntriesContainer/EntriesContainer.js";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer.js";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const initialEntries = [
    {
      id: 1000,
      isFavorite: false,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      isFavorite: false,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      isFavorite: false,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      isFavorite: false,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];

  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  const [filter, setFilter] = useState("all");

  const favoriteEntries = entries.filter((entry) => entry.isFavorite);

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id
          ? {
              id: entry.id,
              isFavorite: !entry.isFavorite,
              date: entry.date,
              motto: entry.motto,
              notes: entry.notes,
            }
          : entry
      )
    );
  }

  function handleNewEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { id: uid(), isFavorite: false, date, ...newEntry },
      ...entries,
    ]);
  }

  return (
    <div className="App">
      <Header AppTitle="My Journal App" />
      <Form formTitle="New Entry" onNewEntry={handleNewEntry} />
      <Navigation
        onShowAllEntries={handleShowAllEntries}
        onShowFavoriteEntries={handleShowFavoriteEntries}
        filter={filter}
        allCount={entries.length}
        favoriteCount={favoriteEntries.length}
      ></Navigation>
      <EntriesContainer
        entries={filter === "all" ? entries : favoriteEntries}
        // entries={entries}
        onToggleFavorite={handleToggleFavorite}
      />

      <Footer>Journal App - 2028</Footer>
    </div>
  );
}

export default App;
