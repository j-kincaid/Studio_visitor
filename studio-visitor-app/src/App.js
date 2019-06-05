import React, { Component } from 'react';
// import {
//     BrowserRouter,
//     Route
// } from 'react-router-dom';
import './css/index.css';

const artists = [{
        id: 0,
        url: 'images/00GuillermoKaterina.jpg',
        name: 'KATERINA GUILLERMO',
        studio: 1,
        bio: 'Kats-bio',
        type: 'visual'
    },
    {
        id: 1,
        url: 'images/01ParkerMadisonMae.jpg',
        name: 'MADISON MAE PARKER',
        studio: 2,
        bio: 'Madis-bio',
        type: 'visual'
    },
    {
        id: 2,
        url: 'images/02AyalaJessica.jpg',
        name: 'JESSICA AYALA',
        studio: 3,
        bio: 'Jessica_As-bio',
        type: 'writer'
    },
    {
        id: 3,
        url: 'images/03HallSheriPurpose.jpg',
        name: 'SHERI PURPOSE HALL',
        studio: 4,
        bio: 'Sheris-bio',
        type: 'writer'
    },
    {
        id: 4,
        url: 'images/04RobertsLavinia.jpg',
        name: 'LAVINIA ROBERTS',
        studio: 5,
        bio: 'Lavinias-bio',
        type: 'writer'
    },
    {
        id: 5,
        url: 'images/05NuttingKaia.jpg',
        name: 'KAIA NUTTING',
        studio: 6,
        bio: 'Kaias-bio',
        type: 'perf'
    },  

    { 
        id: 6,
        url: 'images/06BakerJE.jpg',
        name: 'JE BAKER',
        studio: 7,
        bio: 'Jens-bio',
        type: 'writer'
    },
    { 
        id: 7,
        url: 'images/07KilroyKevin.jpg',
        name: 'KEVIN KILROY',
        studio: 8,
        bio: 'Kaias-bio',
        type: 'writer'
    }, 
    {
        id: 8,
        url: 'images/08McElroyLilly.jpg',
        name: 'LILLY MCELROY',
        studio: 9,
        bio: 'Lillys-bio',
        type: 'visual'
    },
    {
        id: 9,
        url: 'images/09SernaKiki.jpg',
        name: 'KIKI SERNA',
        studio: 10,
        bio: 'Kikis-bio',
        type: 'visual'
    },
    {
        id: 10,
        url: 'images/10KincaidJessica.jpg',
        name: "JESSICA KINCAID",
        studio: 11,
        bio: 'Jessica_Ks-bio',
        type: 'visual'
    },
    {
        id: 11,
        url: 'images/11RoytbergLaurena.jpg',
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