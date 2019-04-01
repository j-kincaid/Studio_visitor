import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
// import './App.css';

const artists = [
    {
        id: 7,
        name: 'Lilly',
        studio:  9,
        bio: 'Lillys-120-word-bio',
        type: 'visual', 
        url: 'images/09lilly.jpg'
      },
      {
        id: 9,
        name: "Jessica",
        studio: 11,
        bio: 'Jessicas-120-word-bio',
        type: 'visual',
        url: 'images/11jessica.jpg'
      },
      {
        id: 10,
        name: "Laurena",
        studio: 12,
        bio: 'Laurenas-120-word-bio',
        type: 'visual',
        url: 'images/12laurena.jpg'
      }

];

const Artist = (props) => {
    return (
      <div className="profile">
      <div>
        <img src={props.url} alt={props.picture} />
      </div>
        <h2>{ props.name }</h2>
        <p>{ props.studio }</p>
        <p>{ props.bio }</p>
        <h3>Artist Profile</h3>
        <ul>
          <li><strong>Type:</strong> { props.type }</li>
        </ul>
      </div>
    );
  }


const ArtistList = (props) => {
    return (
      <div className="container">
        {props.artist.map( artist => 
          <Artist
            {...artist}
            key={artist.id}
          />      
        )}
      </div>
    );
  }
  
ReactDOM.render(
<ArtistList artists={artists} />,
document.getElementById('root')
);