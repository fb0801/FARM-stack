
import './App.css';
import React, {useState, useEffect} from 'react';
import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

const [todoList, setTodoList] = useState([{}])
const [title, setTitle] = useState('')
const [desc, setDesc] = useState('')

//read todo
useEffect(() =>{
  Axios.get("http://localhost:8000/api/todo")
  .then(res => {
    setTodoList(res.data)
  })
})

//post todo
const addTodoHandler =() => {
  Axios.post("http://localhost:8000/api/todo/", {'title':
title, 'description': desc})
.then(res => console.log(res))
}

  return (
    
    <div className='App list-group-item 
    justify-content-center align-items-centre 
    mx-auto' style={{'width':'400px', 
    'backgroundColor':'white', 'marginTop':'15px'}}>
      <h1 className='card text-white bg-primary mb-1'
      styleName="max-width:20rem;">Task Manager</h1>

      <h6 className='card text-white bg-primary mb-3'>FASTAPI -REACT - MongoDB</h6>
      <div className='card-body'>

    <h5 className='card text-white bg-dark mb-3'>Add your Task</h5>
    <span className='card-text'>
      <input className='mb-2 form-control titleIn' placeholder='Title'></input>
      <input className='mb-2 form-control desIn' placeholder='Description'></input>
      <button className='btn btn-outline-primary mx-2 mb-2' style={{
        'borderRadius':'50px', 'font-weight':'bold'}}>Add Task</button>


    </span>

        <h5 className='card text-white bg-dark mb-3'>Your Task</h5>
        <div>
          {/*Todo items*/}
        </div>
      </div>

        <h6 className='card text-dark bg-warning py-1 mb-0'>Copyright 2023, all rights reserved &copy;</h6>

    </div>







    
  );
}

export default App;
