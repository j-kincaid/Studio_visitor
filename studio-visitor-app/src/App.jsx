import React from 'react';
import ReactDOM from 'react-dom';
// import { Component } from 'react';
// import './App.css';

const artists = [
    {
        id: 4,
        name: 'Kaia',
        studio:  5,
        bio: 'Kaias-120-word-bio'
      },
    {
        id: 5,
        name: 'Jen',
        studio:  6,
        bio: 'Jens-120-word-bio'
      },
    {
        id: 6,
        name: 'Kevin',
        studio:  7,
        bio: 'Kevins-120-word-bio'
      },
    {
        id: 7,
        name: 'Lilly',
        studio:  8,
        bio: 'Lillys-120-word-bio'
      },
      {
        name: "Kiki",
        studio: 9,
        id: 1
      },
      {
        name: "Jessica",
        studio: 10,
        id: 2
      },
      {
        name: "Laurena",
        studio: 11,
        id: 3
      }

];

const Artist = (props) => {
    return (
        <div className="profile">
        <div>
            <img src={props.url} />
        </div>
        <h2>{props.name}</h2>
        <h2>{props.studio}</h2>
        <p>{ props.bio }</p>
            {props.artists.map( artist =>
            <Artist 
                {...artist}
                key={artist.id}
            />
            )}
        </div>
    );
}
const ArtistList = (props) => {
    return (
        <div className="container">
        {props.artists.map( artist => 
        <Artist
        {...artist}
        key={artist.id}
        />
        )}
        <header>
            <h1>CHARLOTTE STREET FOUNDATION OPEN STUDIOS EVENT</h1>
        </header>

            <div id="map" className="image" >
            <svg>
                <defs>
                    <g id="studio-icon">
                       
                    </g>

                    <g id="studio-map">
                       
                    </g>
                </defs>
                </svg>
            </div>

    }
}

    
    
            <footer><small>&copy; 2019 Jessica Kincaid</small></footer>
        </div>
    
        );
    }

   

ReactDOM.render(
<ArtistList artists={artists} />,
document.getElementById('root')
);