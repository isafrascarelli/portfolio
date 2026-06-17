import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Inicio from './pagina/Inicio/Inicio'
import SobreMim from './pagina/SobreMim/SobreMim'
import Menu from './componentes/Menu/Menu'
import Rodape from './componentes/Rodape/Rodape'
import PaginaPadrao from './componentes/PaginaPadrao/PaginaPadrao'
import Post from './pagina/Post/Post'
import NaoEncontrada from './pagina/NaoEncontrada/NaoEncontrada'

const App = () => {
  return(
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route path='/' element={<PaginaPadrao />}>
      <Route index element={<Inicio />}/>
      <Route path="sobremim" element={<SobreMim />}/>
    </Route>
      <Route path="post/:id" element={<Post />} />
      <Route path="*" element={<NaoEncontrada />}/>
  </Routes>
  <Rodape />
  </BrowserRouter>
  )
}

export default App
