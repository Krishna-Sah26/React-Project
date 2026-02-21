import { useState, useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false)
  const [charactersallowed, setCharactersallowed] = useState(false)
  const[Password,setpassword]=useState("")

  //ref hook
  const PasswordRef = useRef(null)

  

  const PasswordGenerator = useCallback(() => {
     let pass=""
    let str= 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallowed) str+="0123456789"
    if(charactersallowed) str+="!@#$%^&*+-=(){}[],.`"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length+1)
      pass+= str.charAt(char)
      
    }
    setpassword(pass)
    
  },[length, numberallowed, charactersallowed,setpassword])
   
   
  useEffect(()=>{
    PasswordGenerator()
  },[length,numberallowed,charactersallowed,PasswordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md linear-lg p-4 bg-white mt-10
     rounded-lg px-4 my-8 text-orange-500 bg-orange-100-500;
     '>
      <h1 className='text-2xl font-bold mb-4 text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg'>
        <input type="text"placeholder='password' value={Password} readOnly className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" ref={PasswordRef}/>
        <button className="ml-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer transition-colors" onClick={()=>{
          PasswordRef.current.select()
          document.execCommand("copy")
        }}>Copy</button>
      </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={1}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={numberallowed}
          id='numberInput'
          onChange={()=>{
              setNumberallowed((prev)=>!prev);
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
        <div>
          <div className='flex items-center gap-x-1'>
             <input
                type='checkbox'
               defaultChecked={charactersallowed}
                id="characterInput"
                onChange={()=>{
                setCharactersallowed((prev)=>
                !prev);
               }}
             />
              <label htmlFor="characterInput"> Characters</label>
          </div>
        </div>
        </div>
       </div>
     </div>
     

    </>
  )
}

export default App
