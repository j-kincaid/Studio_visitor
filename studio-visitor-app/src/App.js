import React, { Component } from 'react';
import './index.css';

const artists = [{
        id: 7,
        url: 'images/09lilly.jpg',
        name: 'Lilly',
        studio: 9,
        bio: 'Lillys-bio',
        type: 'visual'
    },
    {
        id: 9,
        url: 'images/11jessica.jpg',
        name: "Jessica",
        studio: 11,
        bio: 'Jessicas-bio',
        type: 'visual'
    },
    {
        url: 'images/12laurena.jpg',
        id: 10,
        name: "Laurena",
        studio: 12,
        bio: 'Laurenas-bio',
        type: 'visual'
    }

];

const Artist = (props) => {
    return ( <
        div className = "profile" >
        <
        div >
        <
        img src = { props.url }
        alt = { props.picture }
        /> < /
        div > <
        h2 > { props.name } < /h2> <
        p > { props.studio } < /p> <
        p > { props.bio } < /p> <
        h3 > Artist Profile < /h3> <
        ul >
        <
        li > < strong > Type: < /strong> { props.type }</li >
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
            h2 > Artists < /h2> <
            p >
            Art < code > src / App.js < /code> and save to reload. < /
            p > <
            a className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" > < /a> <
            ArtistList artist = { artists }
            /> < /
            header >
            <
            / div>

        );
    }
}

export default App;