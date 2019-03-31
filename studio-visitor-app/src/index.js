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
        name: "Lilly",
        studio: 8, 
        id: 0
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


const Header = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Studios: {props.totalArtists}</span>
        </header>
    );
}

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
        <div className="studioboard">
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

ReactDOM.render(
    <App initialArtists = {artists}/>,
    document.getElementById('root')
);

