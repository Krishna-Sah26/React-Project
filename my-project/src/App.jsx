import { useState } from 'react'
import './App.css'
import Card from './Components/card.jsx'
let myObj={
  username:"john_doe",
  age:30
}

function App() {
  const [count, setCount] = useState(0)

return (
  <>
    <h1 className="text-center text-red-400 bg-green-400 text-2xl">tailwind classs</h1>
    <Card username="Chai or Code" btntext="Follow"/>
    <Card username="krishna" btntext="Unfollow"/>
  </>
)
}
export default App
