import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'


function App() {
  const [thememode,setthememode]=useState("light")
  
  const LightMode=()=>{
    setthememode("Light")
  }
  
  const DarkMode=()=>{
    setthememode("dark")
  }
  
  useEffect(()=>{
    document.querySelector('html').classList.remove("Light", "dark")
    document.querySelector('html').classList.add(thememode)
  },[thememode])
  
  return (
   <ThemeProvider value={{thememode,LightMode,DarkMode}}>
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {<ThemeBtn/>}
                       
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    {<Card/>} 
                    </div>
                </div>
            </div>

   </ThemeProvider>
  )
}

export default App
