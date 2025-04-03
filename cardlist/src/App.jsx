import { useEffect, useState } from 'react'

import './App.css'
import CardLIst from './component/card/CardLIst'

function App() {
const [dark,setDark]=useState( JSON.parse(localStorage.getItem('dark'))??false   );
useEffect(()=>{

localStorage.setItem('dark',JSON.stringify(dark))

if(dark){
  document.documentElement.classList.add("dark")
}
else{
  document.documentElement.classList.remove("dark");
}

},[dark])
 console.log(dark)
  return (
    <div className='flex flex-col min-h-screen items-center justify-center bg-white dark:bg-slate-800 min-w-screen space-y-10'>
    <div onClick={()=>(setDark((prev)=>(!prev)))} className='bg-green-300 p-4 rounded-2xl mt-10 font-bold hover:scale-105 duration-700'>{!dark ?"Dark Mode" : "Light Mode"} </div>
      <CardLIst dark={dark} setDark={setDark}/>
       
    </div>
  )
}

export default App
