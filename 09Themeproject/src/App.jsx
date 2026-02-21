import Cards from './components/cards';
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';

function App() {
   const[themeMode,setThemeMode]=useState("light");
   const lightTheme = ()=>{
    setThemeMode("light");
   }
    const darkTheme = ()=>{
      setThemeMode("dark");
    }
     // to catual thw theme
     useEffect(()=>{
      document.querySelector("html").classList.remove("light","dark");
      document.querySelector("html").classList.add(themeMode);
      
     },[themeMode])
  return (

   <ThemeProvider value={{themeMode: themeMode,lightTheme,darkTheme}}>
     <div className="flex flex-wrap min-h-screen items-center bg-white">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Cards/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
