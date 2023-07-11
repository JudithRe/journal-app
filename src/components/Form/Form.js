export default function Form({ formTitle, formId, onNewEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onNewEntry(data);

    event.target.reset();
    event.target.motto.focus();
  }

  return (
    <>
      <h2 className="form__title" id={formId}>
        {formTitle}
      </h2>
      <form onSubmit={handleSubmit} className="form" aria-labelledby={formId}>
        <FormInput id="motto" inputLabel="Motto" />
        <FormTextarea id="notes" textareaLabel="Notes" />
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </>
  );
}

function FormInput({ id, inputLabel }) {
  return (
    <>
      <label className="form__label" htmlFor={id}>
        {inputLabel}
      </label>
      <input className="form__input" name={id} id={id} required />
    </>
  );
}

function FormTextarea({ id, textareaLabel }) {
  return (
    <>
      <label className="form__label" htmlFor={id}>
        {textareaLabel}
      </label>
      <textarea
        className="form__input"
        id={id}
        name={id}
        rows="4"
        required
      ></textarea>
    </>
  );
}
