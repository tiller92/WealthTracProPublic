import Menu from "../../../components/Menu"
import Logout from '../../../components/Logout'
import axios from "axios"
import ChangeUserInfo from "../../../components/ChangeUserInfo"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



export default function SettingsPage(){
  const router = useRouter()
  const [username, setUsername] = useState('')

  useEffect(()=>{
    setUsername(localStorage.username)
    console.log(username)
  })

  function deleteUser(){
    if(localStorage.username != ''){
      axios.delete('/api/deleteUser',{
        data:{
        username:localStorage.username,
      },})
      localStorage.clear()
      return router.push('/')
    }else{
      return router.push('/')
    }
  }


  return (
    <>
    {/* <div className="absolute bg-gradient-to-r from-main-bg to-secondary w-screen  h-screen"> */}
    <div className='bg-slate-900  h-screen'>
    
    <nav className="flex justify-between">
      <Menu></Menu>
      <button onClick={()=>router.push(`/usr/${username}`)} className="box-border p-1 m-5 border-1 shadow-md rounded-lg w-32 h-16 bg-yellow-200 transition ease-in-out delay-150 hover:bg-emerald-400 duration-300 "
      >Home</button>
    </nav>
    

    <div className="grid grid-cols-1">
   <div className="flex justify-center">
    <ChangeUserInfo username={username} />
    </div>

    <div className="m-5 p-5 border-box flex justify-center">
      <button onClick={deleteUser} className="bg-red-400 p-4 ">DELETE ACOUNT</button>
    </div>

    </div>
    </div>
    </>
  )
}