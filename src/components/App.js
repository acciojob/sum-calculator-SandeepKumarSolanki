
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input , setInput] = useState(0);
  const [sum , setSum]=useState(0);
  useEffect(()=>{
    setSum(sum + Number(input))
  },[input])
  return (
    <div>
        {/* Do not remove the main div */}
        <input
          type="number"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <h1>Sum: {sum}</h1>
    </div>
  )
}

export default App
