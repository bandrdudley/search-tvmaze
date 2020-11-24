import React, { useState } from 'react';

import ShowForm from './ShowForm';
import ShowList from "./ShowList";

const Shows = () => {
    const [userShows, setUserShows] = useState([]);

    const urlBase = "https://api.tvmaze.com/search/shows?q=";

    const searchShowsHandler = async show => {
        const url = urlBase + show.title;
        try {
            const showsPromise = await fetch(url);
            const showsJson = await showsPromise.json();
            console.log(showsJson);
            setUserShows(showsJson);
        } catch (err) {
            console.log(err);
        }
    };

    return (
      <section>
          <h1>Shows</h1>
          <ShowForm onSearchShow={searchShowsHandler}/>
          <ShowList shows={userShows}/>
      </section>
    );
};

export default Shows;