import React from 'react'
import notes from "../notes.js"
import {Container, Row, Col } from 'react-bootstrap'

class Note extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: notes[this.props.match.params.id]
        }
    }

    render(){
        return (
            <Container>
                <br/>
                <Row>
                    <Col lg={{span: 6, offset: 4}}>
                        <h1>{this.state.note.title}</h1>
                        <p>{this.state.note.note}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Note