import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import notes from '../notes.js'

class AddNote extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            note: ''
        };
        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleNoteChange = this.handleNoteChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.addNote = this.addNote.bind(this);
      }

      handleAuthorChange(e) {
          this.setState({author: e.target.value})
      }

      handleTitleChange(e){
          this.setState({title: e.target.value})
      }

      handleNoteChange(e){
          this.setState({note: e.target.value})
      }
    

    addNote() {
        const note = {
            title: this.state.title,
            author: this.state.author,
            note: this.state.note
        }
       notes.push(note)
        this.props.history.push('/')

    }
    
    render (){
        return (
            <Container>
                <Row>
                    <h1>Add a New Note </h1>
                </Row>
                <Row>
                    <Col lg="12">
                        <Form>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title of the Note" value={this.state.title} onChange={this.handleTitleChange}/>
         
                            </Form.Group>

                            <Form.Group controlId="formBasicAuthor">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="Enter the author of the note" value={this.state.author} onChange={this.handleAuthorChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicNote">
                                <Form.Label>Write your note</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.note} onChange={this.handleNoteChange} />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.addNote}>
                                Submit
                            </Button>
                        </Form>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default AddNote