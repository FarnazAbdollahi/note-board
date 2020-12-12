import React, { useState, useEffect } from 'react'
import './Board.css';
import NotesList from '../components/Notes/NotesList'
import NewNote from '../components/NewNote/NewNote'
import axios from '../axios-notes'

const Board = () => {
    const [note, setNote] = useState([])
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)
    const saveHandler = (title, content) => {
        axios.post('/notes.json', { title: title, content: content })
            .then((response) => {
                handleClose()
            })
            .catch((error) => {
            })
    }
    useEffect(() => {
        axios.get('https://cork-board-notes.firebaseio.com/notes.json')
            .then((response) => {
                if (response.data === null) {
                    document.getElementById("notes-list").innerHTML = "There are no notes"

                }
                else {
                    let key = Object.keys(response.data)
                    let note = []
                    for (let i = 0; i < key.length; i++) {
                        note.push({
                            key: key[i],
                            title: response.data[key[i]].title.split('\n').map(function (item) {
                                return (
                                    <span>
                                        {item}
                                        <br />
                                    </span>
                                )
                            }),
                            content: response.data[key[i]].content.split('\n').map(function (item) {
                                return (
                                    <span >
                                        {item}
                                        <br />
                                    </span>
                                )
                            })
                        })
                    }
                    setNote(note)
                }

            })

    })

    const deleteNoteHandler = (index) => {
        axios.delete(`https://cork-board-notes.firebaseio.com/notes/${note[index].key}.json`)
            .then(() => {
                setNote(note.splice(index, 1))
            });
    }
    return (
        <div className="board" >
            <NewNote
                handleShow={handleShow}
                show={show}
                handleClose={handleClose}
                saveHandler={saveHandler}
            />
            <NotesList note={note} deleteNoteHandler={deleteNoteHandler} />

        </div>
    );
}

export default Board;
