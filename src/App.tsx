
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App
