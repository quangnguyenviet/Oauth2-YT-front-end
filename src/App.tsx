
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import ShowInfo from './components/ShowInfo'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='info' element={<ShowInfo />} />
    </Routes>
  )
}

export default App
