import { useState } from "react"
import data from './data'
const App = () => {
 const [text, setText] = useState([]);
 const [count, setCount] = useState(0);
 const [errorMessage, setErrorMessage] = useState("");
  
  return (
    <div>App</div>
  )
}

export default App