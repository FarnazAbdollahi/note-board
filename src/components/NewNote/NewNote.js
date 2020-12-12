import React, { useState } from 'react'
import './NewNote.css'
import Modal from 'react-bootstrap/Modal'


const NewNote = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <React.Fragment>
            <button className="btn" onClick={props.handleShow} >
                + Add Note
            </button>
            <div className="new-note">
                <Modal show={props.show} onHide={props.handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>
                            <label htmlFor="title">Title : </label>
                            <input id="title" type="text" value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value)
                                }} />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="note-info">
                        <label htmlFor="content">Content : </label>
                        <textarea min-cols="40" min-rows="5" id="content" type="text" value={content}
                            onChange={(event) => {
                                setContent(event.target.value)
                            }} ></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn" onClick={props.handleClose}>
                            Cancel
                    </button>
                        <button className="btn" onClick={() => props.saveHandler(title, content)}>
                            Save
                    </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </React.Fragment>
    )
}

export default NewNote
