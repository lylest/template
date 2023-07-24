import { createContext, useReducer } from 'react'

export const GlobalContexts = createContext()

export const updateContextReducer = (state,action)=>{
        switch(action.type){
              case 'SET_CURRENT_USER':
                return {
                  ...state,
                  currentUser: action.payload
               } 
                 
               case 'set_encounters':
                  return {
                    ...state,
                    encounters: action.payload
               }

               case 'set_loading':
                  return {
                    ...state,
                    isLoading: action.payload
                 }

              default: return state    
        }
       
}

export const GlobalContextProvider = ({children})=>{
         const[state,dispatch] = useReducer(updateContextReducer,{
                currentUser:null,
                encounters:[],
                isLoading: true
         })
         return (
            <GlobalContexts.Provider value={{...state,dispatch}}>
                { children }
            </GlobalContexts.Provider>
         )
}
