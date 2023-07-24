import { useState, useEffect } from "react"
import { useGlobalContextHook } from '../hook/useGlobalContextHook'

export const  useAppHook =() => {
    const { dispatch } = useGlobalContextHook()
    const [ isUserLoggedIn, setIsUserLoggedIn] = useState(true) //null,false

    return {
        isUserLoggedIn
    }
}