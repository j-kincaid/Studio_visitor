import React from 'react';
import Program from './Program';
import { CSSPrograms } from '../../data/artists';

const CSS = (props) => {
    let programs = CSSPrograms.map((program) => {
        return <program title = { program.title }
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

export default CSS;