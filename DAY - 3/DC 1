import React, { useState } from 'react';

function App() {
    const [tasks,setTasks]=useState([
        {id:1,name:'Task 1'},
        {id:2,name:'Task 2'},
        {id:3,name:'Task 3'}
    ]);
    const handleDelete=(id)=>{
        setTasks(tasks.filter(task => task.id!==id));
    }
    return (
        <div style={{backgroundColor:'lightblue',
          height:'50vh',
          width:'50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
            
            <h1 style={{position:'fixed',marginBottom:'200px'}}>Task List</h1>
            <ul style={{listStyleType:'none',}}>
                {tasks.map(task => (
                    <li key={task.id} style={{padding:'5px'}}>
                        {task.name}&nbsp;
                        <button onClick={()=>handleDelete(task.id)} style={{backgroundColor:'red',color:'white'}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
