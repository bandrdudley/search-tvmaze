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
          <form onSubmit={submitHandler}>
              <div className="form-control fa fa-search">
                  <input
                      type="search"
                      id="title"
                      value={enteredTitle}
                      placeholder="search"
                      results="0"
                      onChange={event => {
                          setEnteredTitle(event.target.value);
                      }}
                  />
              </div>
              <div className="ingredient-form__actions">
                  <button type="submit">Search</button>
              </div>
          </form>
      </section>
    );
};

export default ShowForm;