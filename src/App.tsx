import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categorias/listacategoria/ListaCategorias'
import FormCategorias from './components/categorias/formcategoria/FormCategorias'
import DeletarCategorias from './components/categorias/deletarcategoria/DeletarCategorias'
import './App.css'



function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategorias />} />
              <Route path="/editarcategoria/:id" element={<FormCategorias />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategorias />} /> 
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App