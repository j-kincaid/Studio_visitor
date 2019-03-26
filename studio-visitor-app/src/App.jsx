import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
<div id="container">
        <header>
            <h1>CHARLOTTE STREET FOUNDATION OPEN STUDIOS EVENT</h1>
        </header>

            <div id="map" class=".image" >
            <svg>
                <defs>
                    <g id="studio-icon">
                       
                    </g>

                    <g id="studio-map">
                       
                    </g>
                </defs>
                </svg>
            </div>

    
        <button onclick="visitArtist()" class="dropbtn">Artists</button>
            <ul id="artistMenu" class="dropdown-content" class="sub-menu">

                <li class="vis"><a href="#">1 Katerina Guillermo</a></li>
                <li class="write perf"><a href="profile.html">2 Madison Mae Parker</a></li>
                <li class="write perf"><a href="#">3 Jessica Ayala</a></li>
                <li class="write perf"><a href="#">4 Sheri Hall</a></li>
                <li class="write"><a href="#">6 Lavinia Roberts</a></li>
                <li class="perf"><a href="#">7 Kaia Nutting</a></li>
                <li class="write"><a href="#">8 Kevin Kilroy</a></li>
                <li class="vis"><a href="#">9 Lilly McElroy</a></li>
                <li class="vis"><a href="#">10 Kiki Serna</a></li>
                <li class="vis"><a href="#">11 Jessica Kincaid</a></li>
                <li class="vis"><a href="#">12 Laurena Roytberg</a></li>
                <li class="perf"><a href="#">13 Jason Zeh</a></li>
                <li class="perf"><a href="#">14 Tristian Griffin</a></li>
                <li class="perf"><a href="#">15 Daniel Hogans</a></li>
                <li class="perf"><a href="#">16 KC Public Theatre</a></li>
                <li class="perf"><a href="#">17 Mazzy Mann</a></li>
                <li class="vis"><a href="#">18 JE Baker</a></li>
                <li class="vis"><a href="#">19 Fuko Ito</a></li>
                <li class="vis"><a href="#">20 Elizabeth Stehling</a></li>
                <li class="write"><a href="#">21 Alicen Lundberg</a></li>
                <li class="vis"><a href="#">22 Luke Haynes</a></li>
                <li class="vis"><a href="#">23 Benjamin Wills</a></li>
                <li class="vis"><a href="#">24 Iliann Alvarez</a></li>
                <li class="vis"><a href="#">25 Elizabeth Derstine</a></li>
                <li class="vis"><a href="#">26 Ruben Castillo</a></li>
                <li class="vis"><a href="#">27 Bo Hubbard</a></li>
                <li class="vis"><a href="#">28 Nazanin Amiri</a></li>
            </ul>
    
            <footer><small>&copy; 2019 Jessica Kincaid</small></footer>
        </div>
    
        );
    }
}

export default App;