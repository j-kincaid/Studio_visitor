import React from 'react';
import ArtistList from '../data/artists';

const Artists = () => {
    let artists = ArtistList.map((artist) => {
        return ( <
            li className = "artist"
            key = { artist.id } >
            <
            img className = "artist-img"
            src = { artist.img_src }
            alt = "artist" / >
            <
            h3 > { artist.name } < /h3> <
            p > { artist.bio } < /p> <
            /li>
        );
    });

    return ( <
        div className = "main-content" >
        <
        h2 > Artists < /h2> <
        ul className = "group" > { artists } <
        /ul> <
        /div>
    );
}

export default Artists;