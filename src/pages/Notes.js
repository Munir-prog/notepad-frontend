import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {getNotes} from "../http/userApi";
import {Button, Container, Form, Modal, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import "../style/App.css"
const Notes = observer(() => {

    const {notes} = useContext(Context);
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getNotes().then(data => notes.setNotes(data))
            .finally(setLoading(false))
        console.log("NotesPage")
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    const click = async () => {

    }

    return (
        <div>
            {notes.notes.map(note =>
                <Container className={"border border-dark text-light border-2 mt-2"}>
                    <h3>{note.tittle}</h3>
                    <span>{note.text}</span>
                </Container>
            )}
            <Container className={"mt-4  d-flex justify-content-end"}>
                <Button className={"btn btn-light"} onClick={handleShow}>
                    Создать
                </Button>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="d-flex flex-column">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text"
                                          // className={"mt-3"}
                                          value={title}
                                          onChange={e => setTitle(e.target.value)}
                                          placeholder="Type title..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Text</Form.Label>
                            <Form.Control as="textarea"
                                          className={"mt-3"}
                                          value={text}
                                          onChange={e => setText(e.target.value)}
                                          placeholder={"Type text..."}
                                          rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={click}>Сохранить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

});

export default Notes;