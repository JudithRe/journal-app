export default function Form({ children, formTitle, formId }) {
  return (
    <>
      <h2 className="form__title" id={formId}>
        {formTitle}
      </h2>
      <form className="form" aria-labelledby={formId}>
        {children}
      </form>
    </>
  );
}

export function FormInput({ id, inputLabel }) {
  return (
    <>
      <label className="form__label" htmlFor={id}>
        {inputLabel}
      </label>
      <input className="form__input" name={id} id={id} />
    </>
  );
}

export function FormTextarea({ id, textareaLabel }) {
  return (
    <>
      <label className="form__label" htmlFor={id}>
        {textareaLabel}
      </label>
      <textarea className="form__input" id={id} name={id} rows="4"></textarea>
    </>
  );
}
