import React from 'react';
import {ListGroup, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import notes from '../notes.js'
import { IoIosArrowForward } from 'react-icons/io';

class Notes extends React.Component {

    getNotes() {
        //hardcoded object to be replaced by api eventually
        return notes;
    }
    
    render() {
        return (
            <ListGroup>
                 {notes.map((note, index) => {
                     const url = `/note/${index}`;
                    return (
                        <ListGroup.Item key={index}>
                            <Row>
                                <Col xs="10">
                                    <h3>{note.title}</h3>
                                    <h6>By: {note.author}</h6>
                                </Col>
                                <Col xs="2">
                                <Link to={url}><IoIosArrowForward size="3em" /></Link>
                                </Col>
                        </Row>
                        </ListGroup.Item>
                    )
                    })
                }
            </ListGroup>
        )
    }
}

export default Notes