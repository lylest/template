import { useContext} from 'react'
import { GlobalContexts} from '../context/GlobalContext'

export const useGlobalContextHook = ()=>{
      const globalContexts = useContext(GlobalContexts)
      
      function validateInputs (inputs)  {
       const isInvalid = inputs.some(input => {
        return input === "" || input === null || input === 0 || input <= 0
        })
        return isInvalid
      }
  
      if(!globalContexts){
         throw Error("globalContexts must be used inside the globalcontext provider")
      }

      return  { ...globalContexts, validateInputs }
}