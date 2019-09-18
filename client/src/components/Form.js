// * Code originally from TeamTreehouse TechDegree Program "React Authentication".
import React from 'react';

export default ({cancel, errors, submit, submitButtonText, elements}) => {

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={(e) => submit(e)}>
        {elements()}
        <div className="pad-bottom">
          <button className="button" type="submit">{submitButtonText}</button>
          <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

function ErrorsDisplay( { errors } ) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Errors -- Please Check Form</h2>
        <div className="validation-errors">
          <ul>
            {
              errors.map((error, i) => <li key={i}>{error}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}