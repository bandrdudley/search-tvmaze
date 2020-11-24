import React, { useState } from 'react';

import './ShowForm.css';

const ShowForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        props.onSearchShow({ title: enteredTitle });
    };

    return (
      <section className="ingredient-form">
        <h2>ShowForm</h2>
          <form onSubmit={submitHandler}>
              <div className="form-control">
                  <input
                      type="text"
                      id="title"
                      value={enteredTitle}
                      onChange={event => {
                          setEnteredTitle(event.target.value);
                      }}
                  />
              </div>
              <div className="ingredient-form__actions">
                  <button type="submit">Search Shows</button>
              </div>
          </form>
      </section>
    );
};

export default ShowForm;