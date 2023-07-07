import "./App.css";
import Header from "./components/Header/Header.js";
import Form, { FormInput, FormTextarea } from "./components/Form/Form.js";
import Button from "./components/Button/Button.js";
import EntriesContainer from "./components/EntriesContainer/EntriesContainer.js";
import Navigation, { NavLink } from "./components/Navigation/Navigation.js";
import Entry from "./components/Entry/Entry.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header AppTitle="My Journal App" />
      <Form formTitle="New Entry">
        <FormInput id="motto" inputLabel="Motto" />
        <FormTextarea id="notes" textareaLabel="Notes" />
        <Button type="submit">Create</Button>
      </Form>
      <EntriesContainer>
        <Navigation>
          <NavLink href="#">All Entries</NavLink>
          <NavLink href="#" state="active">
            Favourites
          </NavLink>
        </Navigation>
        <Entry
          motto="Test Title"
          notes="Si sine causa? quae fuerit causa, mox videro interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Entry
          motto="Test Title"
          notes="Si sine causa? quae fuerit causa, mox videro interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
      </EntriesContainer>
      <Footer>Journal App - 2028</Footer>
    </div>
  );
}

export default App;
