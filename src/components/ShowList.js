import React from 'react';

const ShowList = props => {
    const genericShow = 'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Template-Movie-Credits-StudioBinder.jpg';
    return (
        <section>
            <h2>ShowList</h2>
            <div className="shows">
                {props.shows.map(show => (
                    <div className="show-wrapper card">
                        <div className="show">
                            <img className='show__img' src={show.show.image ? show.show.image.medium : genericShow} alt={show.show.name}/>
                            <h3>{show.show.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShowList;