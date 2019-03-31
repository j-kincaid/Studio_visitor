import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const artists = [
    {
        id: 4,
        name: 'Kaia',
        studio:  5,
        bio: 'Kaias-120-word-bio'
        url: 'img/Kaia.jpg'
      },
    {
        id: 5,
        name: 'Jen',
        studio:  6,
        bio: 'Jens-120-word-bio'
        url: 'img/Jen.jpg'
      },
    {
        id: 6,
        name: 'Kevin',
        studio:  7,
        bio: 'Kevins-120-word-bio'
        url: 'img/kevin.jpg'
      },
    {
        id: 7,
        name: 'Lilly',
        studio:  8,
        bio: 'Lillys-120-word-bio'
        url: 'img/lilly.jpg'
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
        <div className="artist">
            <span className="artist-name">
                {props.name}
            </span>
        <Counter studio={props.studio} />
        </div>
    );
}


const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-studio">{props.studio}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="studioList">
            <Header 
            title="Artist" 
            totalArtists = {props.initialArtists.length}/>

            {props.initialArtists.map( artist =>
                <Artist 
                name={artist.name} 
                studio={artist.studio} 
                key={artist.id.toString()}
                />
            ) }
            
        </div>
    );
}
const ArtistList = (props) => {
    return (
        <div className="mainMenu">

            {props.artist.map( artist =>
            <Artist 
            name={artist.name}
            studio={artist.studio}
            key={artist.id}
            />
            )}
        </div>
    );
}


ReactDOM.render(
    <App initialArtists = {artists}/>,
    document.getElementById('root')
);

