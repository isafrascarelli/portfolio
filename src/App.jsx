import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Inicio from './pagina/Inicio/Inicio'
import SobreMim from './pagina/SobreMim/SobreMim'
import Menu from './componentes/Menu/Menu'
import Rodape from './componentes/Rodape/Rodape'
import PaginaPadrao from './componentes/PaginaPadrao/PaginaPadrao'

const App = () => {
  return(
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route path='/' element={<PaginaPadrao />}>
    <Route index element={<Inicio />}/>
    <Route path="sobremim" element={<SobreMim />}/>
    </Route>
    <Route path="*" element={<div>Erro 404 - Página não encontrada</div>}/>
  </Routes>
  <Rodape />
  </BrowserRouter>
  )
}

export default App
