import React from 'react'
import notes from "../notes.js"
import {Container, Row, Col, Button } from 'react-bootstrap'

class Note extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: notes[this.props.match.params.id].note,
            title: notes[this.props.match.params.id].title
        }
        this.translateNote = this.translateNote.bind(this);
    }

    translateNote() {
        var data = {
            note: this.state.note
        }

        //send to api endpoint to translate the text
    }
    render(){
        return (
            <Container>
                <br/>
                <Row>
                    <Col lg={{span: 3, offset: 9}}>
                        <Button onClick={this.translateNote}>Translate Note</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 6, offset: 4}}>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.note}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Note