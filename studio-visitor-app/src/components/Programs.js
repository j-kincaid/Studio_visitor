import React from 'react';
// import { Route, NavLink, Redirect } from 'react-router-dom';

import HTML from './programs/HTML';
import CSS from './programs/CSS';
import JavaScript from './programs/JavaScript';

const Programs = ({ match }) => ( <
        div className = "main-content programs" >
        <
        div className = "program-header group" >
        <
        h2 > Programs < /h2>  <
        ul className = "program-nav" >
        <
        li > < NavLink to = { `${match.url}/html` } > HTML < /NavLink></li >
        <
        li > < NavLink to = { `${match.url}/css` } > CSS < /NavLink></li >
        <
        li > < NavLink to = { `${match.url}/javascript` } > JavaScript < /NavLink></li >
        <
        /ul> < /
        div >

        { /* Write routes here... */ } <
        Route exact path = { match.path }
        render = {
            () => < Redirect to = { `${match.path}/html` }
            /> } / >
            <
            Route path = { `${match.url}/html` }
            component = { HTML }
            /> <
            Route path = { `${match.url}/css` }
            component = { CSS }
            /> <
            Route path = { `${match.url}/javascript` }
            component = { JavaScript }
            /> < /
            div >
        );

        export default Programs;