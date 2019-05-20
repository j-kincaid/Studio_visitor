import React from 'react';
import Program from './Program';
import { HTMLPrograms } from '../../data/artists';

const HTML = (props) => {
    let programs = HTMLprograms.map((program) => {
        return <Program title = { program.title }
        desc = { program.description }
        img = { program.img_src }
        key = { program.id }
        />
    });
    return ( <
        div >
        <
        ul > { programs } <
        /ul> < /
        div >
    );
}

export default HTML;