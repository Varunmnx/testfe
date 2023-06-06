import { useState } from 'react'
import { BrowserRouter as Router , Routes  ,Route } from 'react-router-dom'
import { RestrictAuthenticatedUser , AuthenticationRequired } from './routes/HOCauth'
import Home from './pages/Home'
import RestrictedPage from './pages/RestrictedPage'
import Login from './pages/Login'
import ContextProvider from './context/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>

          <Router>
                    <Routes>
                            <Route path='/restricted' element={<AuthenticationRequired  component={<RestrictedPage />} /> }/>
                            <Route path='/' element={<Home />}/>
                            <Route path='/login' element={ <RestrictAuthenticatedUser component={<Login/>} /> } /> 
                    </Routes>
          </Router>
    </ContextProvider>
  )
}

export default App
