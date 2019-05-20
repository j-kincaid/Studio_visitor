import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import './css/index.css';

const artists = [{
        id: 7,
        url: 'images/09lilly.jpg',
        name: 'LILLY McELROY',
        studio: 9,
        bio: 'Lillys-bio',
        type: 'visual'
    },
    {
        id: 9,
        url: 'images/11jessica.jpg',
        name: "JESSICA KINCAID",
        studio: 11,
        bio: 'Jessicas-bio',
        type: 'visual'
    },
    {
        url: 'images/12laurena.jpg',
        id: 10,
        name: "LAURENA ROYTBERG",
        studio: 12,
        bio: 'Laurenas-bio',
        type: 'visual'
    }

];

const Artist = (props) => {
    return ( <
        div className = "profile" >
        <
        h2 > { props.name } < /h2>  <
        div >
        <
        img src = { props.url }
        alt = { props.picture }
        /> < /
        div > <
        p > Studio { props.studio } < /p> <
        p > { props.bio } < /p>  <
        ul >
        <
        li > < strong > < /strong> { props.type } artist</li >
        <
        br / >
        <
        /ul> < /
        div >
    );
}


const ArtistList = (props) => {
    return ( <
        div > {
            props.artist.map(artist =>
                <
                Artist {...artist }
                key = { artist.id }
                />      
            )
        } <
        /div>
    );
}
class App extends Component {
    render() {
        return ( <
            div >
            <
            header className = "App-header" >
            <
            h1 > ARTISTS < /h1>    <
            br / > <
            p >
            <
            code > src / App.js < /code>  < /
            p >
            <
            a className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" > < /a>  <
            ArtistList artist = { artists }
            /> < /
            header >
            <
            / div>

        );
    }
}

export default App;