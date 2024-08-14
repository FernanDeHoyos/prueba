import { useState } from 'react'
import Agregar from './pages/Agregar'
import Listar from './pages/Listar'
import Actualizar from './pages/Actualizar'
import { Route, Router, Routes } from 'react-router-dom'



function App() {

  return (
    <>
     <Routes>
      <Route path="/agregar" element={<Agregar />} />
      <Route path="/leer" element={<Listar />} />
      <Route path="/update/:id" element={<Actualizar />} />
    </Routes>
    </>
  )
}

export default App
