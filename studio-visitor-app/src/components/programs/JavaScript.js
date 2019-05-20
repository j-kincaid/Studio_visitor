import React from 'react';
import program from './Program';
import { JSprograms } from '../../data/artists';

const JavaScript = (props) => {
    let programs = JSProgram.map((program) => {
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

export default JavaScript;