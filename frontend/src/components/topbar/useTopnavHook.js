import { useState, useEffect } from "react"
export const useTopnavHook =() => {


    useEffect(()=>{
        getEncounters()
    },[])

    return {
    }
}