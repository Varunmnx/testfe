import react from "react"
import { createContext , useContext , useState , useEffect } from "react"

const Context = createContext()

const ContextProvider = ({children}) => {

const [currentUser , setCurrentUser] = JSON.parse(localStorage.getItem("user")) ? useState(JSON.parse(localStorage.getItem("user")) ) : useState({email:"",isAuthenticated:true,accessToken:"",refreshToken:""})
const [authenticated , setAuthenticated] = JSON.parse(localStorage.getItem("authenticated")) ? useState(JSON.parse(localStorage.getItem("authenticated"))) : useState(false)


let globalyAvailableValues = {   currentUser , authenticated , setAuthenticated }

return (
<Context.Provider value={globalyAvailableValues}>
      {children}
</Context.Provider>
)
}

export default ContextProvider

export  const useCustomContext =()=> useContext(Context)