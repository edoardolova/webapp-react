import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/defaultLayout'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetailPage from './pages/MovieDetailPage'
import AdminPage from './pages/AdminPage'
import NotFound from './pages/NotFound'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'


import { ReviewProvider } from './context/ReviewContext'



function App() {

  return (
    <>
      <ReviewProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/movies' element={<MoviesPage/>}/>
              <Route path='/movie/:slug' element={<MovieDetailPage/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>

            <Route element={<AdminLayout/>}>
              <Route path='/admin' element={<AdminDashboard/>}/>

            </Route>
          </Routes>
        </BrowserRouter>


      </ReviewProvider>
    </>
  )
}

export default App
