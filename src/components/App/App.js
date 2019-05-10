import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';

class App extends Component {
  state = {
    studentList: [],
  };
  
  componentDidMount() {
    console.log('I am here!');
    this.getStudentList();
  }
  
  getStudentList() {
    axios.get('/students')
      .then((response) => {
        console.log('response', response);
        this.setState({students: response.data})
    })
  }
  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here

  }
  postNewStudent(newStudent) {
    axios.post('/students', newStudent)
      .then((response) => {
        console.log('response: ', response);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br />
        <StudentForm addStudent={this.addStudent} />

        <p>Student list goes here.</p>
      </div>
    );
  }
}

export default App;
