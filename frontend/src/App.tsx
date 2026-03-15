import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import RegisterAdmin from './pages/RegisterAdmin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={< RegisterAdmin/>}/>
      </Routes>
    </>
  )
}

export default App
