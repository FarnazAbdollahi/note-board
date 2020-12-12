import React from 'react'
import './Notes.css';
import Note from '../Notes/Note'

const NotesList = (props) => {
    return (
        <div className="notes-list" id="notes-list">
            <ul>
                {
                    props.note.map((item, index) => {
                        return (
                            <Note
                                key={index}
                                title={item.title}
                                content={item.content}
                                deleteNote={() => props.deleteNoteHandler(index)}
                            />)
                    })
                }

            </ul>
        </div>
    );
}

export default NotesList;
