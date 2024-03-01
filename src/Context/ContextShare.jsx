import React, { useState, createContext } from 'react'


export const editFoodResponseContext = createContext()

export const cartResponseContext=createContext()




function ContextShare({children}) {


  const [editFoodResponse, setEditFoodResponse] = useState({})

  const [cartResponse,setCartResponse]=useState({})


  return (
    <>
        <editFoodResponseContext.Provider value={{ editFoodResponse, setEditFoodResponse }}>
          <cartResponseContext.Provider value={{cartResponse,setCartResponse}}>

          {children}

          </cartResponseContext.Provider>
        </editFoodResponseContext.Provider>

  
    </>
  )
}

export default ContextShare