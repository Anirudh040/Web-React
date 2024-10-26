import React,{useState} from 'react'

function App() {
    const [transformation, setTransformation] = useState('Goku');
    const [count,setCount] = useState(0);
    const changeState=()=>{
        setCount(count+1);
        if(count%4===0){
            setTransformation("Kaioken");
        }
        if(count%8===0 && count!==0){
            setTransformation("SuperSaiyan");
        }
    }
  return (
    <div>
        <h1>Current Transformation State : {transformation}</h1>
        <button onClick={changeState}>Change State</button>
    </div>
  )
}

export default App
