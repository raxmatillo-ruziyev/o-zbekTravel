import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'
import Buxoro from './Pages/Buxoro/Buxoro'
import Surxon from './Pages/Surxon/Surxon'
import Toshkent from './Pages/Toshkent/Toshkent'
import Xiva from './Pages/Xiva/Xiva'
import Zomin from './Pages/Zomin/Zomin'
import Samarqand from './Pages/Samarqand/Samarqand'
import Turkiston from './Pages/Turkiston/Turkiston'

function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/buxoro" element={<Buxoro/>} />
  <Route path="/surxon" element={<Surxon/>} />
  <Route path="/toshkent" element={<Toshkent/>} />
  <Route path="/xiva" element={<Xiva/>} />
  <Route path="/zomin" element={<Zomin/>} />
  <Route path="/samarqand" element={<Samarqand/>} />
  <Route path="/turkiston" element={<Turkiston/>} />

  



</Routes>
    </>
  )
}

export default App
