import React from 'react';

import './ShowList.css';

const ShowList = props => {
    const genericShow = 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Template-Movie-Credits-StudioBinder.jpg';
    return (
        <section>
            <div className="shows">
                {props.shows.map(show => (
                    <div className="show-wrapper">
                        <img className='show__img' src={show.show.image ? show.show.image.medium : genericShow} alt={show.show.name}/>
                        <div className="show">
                                <h1>{show.show.name}</h1>
                                <p className="summary line-clamp">{show.show.summary.replace(/(<([^>]+)>)/gi, "")}</p>
                                <button>Show Episodes</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShowList;