import React from 'react'
import './Notes.css';

const Note = (props) => {

    return (
        <li className="note" >
            <h4 className="title">{props.title}</h4>
            <p className="content">{props.content}</p>
            <button className="btn-delete" onClick={props.deleteNote}>delete</button>
        </li>

    );
}

export default Note;
