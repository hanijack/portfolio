"use client"
import {useTheme} from "next-themes"
import { useEffect, useState } from "react"
import {FaSun , FaMoon} from "react-icons/fa"
const Theme = () => {
    const {resolvedTheme , setTheme}= useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    if(!mounted){
        return null
    }
    
  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>

    {resolvedTheme === "dark" ? <FaSun/> : <FaMoon/>}

    </button>
  )
}

export default Theme