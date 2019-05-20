import React from 'react';

const Program = (props) => ( <
    li className = "Program media group" >
    <
    img className = "Program-img"
    src = { props.img }
    alt = "Program" / >
    <
    div >
    <
    h3 > { props.title } < /h3> <
    p > { props.desc } < /p> <
    /div> <
    /li>
);

export default Program;