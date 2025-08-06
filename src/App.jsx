import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/defaultLayout'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetailPage from './pages/MovieDetailPage'
import AdminPage from './pages/AdminPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/movies' element={<MoviesPage/>}/>
            <Route path='/movie/:slug' element={<MovieDetailPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
