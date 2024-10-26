import React, { useState } from 'react'

function App() {
    const [buttontext,setButtontext] = useState('Show Message');
    const [message,setMessage] = useState('');
    const toggleMessage = () =>{
        if(message){
            setMessage('');
            setButtontext("Show Message");
         }
        else{
        setButtontext('Hide Message');
        setMessage("Hi! How are You!!!");
        }
    }
  return (
    <div>
        <button onClick={toggleMessage}>{buttontext}</button>
        <p>{message}</p>
    </div>
  )
}

export default App
