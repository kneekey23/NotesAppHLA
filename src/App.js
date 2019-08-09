import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Notes from './components/Notes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


class App extends React.Component {

createNewNote(){
  //hit api to create a new note in table.
    this.props.history.push('/add')
  
}

render() {

  return (
    <Container>
      <Row>
        <Col lg={{ span: 3, offset: 4 }}>
      <h1>My Notes App</h1>
      </Col>
      </Row>
      <Row>
        <Col lg={{ span:2, offset: 10}}>
        <Button><Link className="addBtn" to="/add">New Note</Link></Button>
        </Col>
      </Row>
    <br/>
      <Row>
        <Col lg="12">
         
          <Notes />
        </Col>
      
      </Row>
    </Container>
  );
}
}

export default App;
