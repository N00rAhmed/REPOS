import React, {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import View from './view'
import Add from './Add';

function App(){
  const [todos, changeTodos] = useState([
    { id: 1, description: "make static data", completed: false},
    { id: 2, description: "make dynamic data", completed: false }
  ])

  const updateList = (id, description, completed) =>{
    console.log('form sumbittted')
    const listItem = {id, description, completed}
    changeTodos((prevState) => [...prevState, listItem])
}

    return (
      <div>
        <Navbar bg="light" expand="md">
          <Navbar.Brand>ToDo List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/view">View</Link>
              <Link className="nav-link" to="/add">Add</Link>

            </Nav> 
          </Navbar.Collapse>  
        </Navbar>
        <Container>
          <Routes>
            <Route index element={
            <View todos = {todos}/> 
          } />

          <Route path="/add" element={
          <Add updateList={(id, description, completed) => updateList(id, description, completed)}
          />
          }/>

          <Route path="/view" element={
          <View todos = {todos}/>
          }/>


          

          </Routes>
        </Container>
      </div>
    );

}
export default App;
