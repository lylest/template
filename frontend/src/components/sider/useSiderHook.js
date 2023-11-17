import { useEffect, useState  } from "react"
import { useGlobalContextHook } from "../../hook/useGlobalContextHook"

export const useSiderHook =() => {
  const [ visible, setVisible ] = useState(false)
  const { currentUser  } = useGlobalContextHook() 
 
    return {
      visible,
      setVisible
    }
}