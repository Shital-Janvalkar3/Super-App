import {Routes, Route, Link} from 'react-router-dom'
import Home from './webpages/Home'
import Genre from './webpages/Genre'
import React from 'react'
import Movies from './webpages/Movies'
import Browse from './webpages/Browse'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Genre" element={<Genre/>}/>
        <Route path="/Browse" element={<Browse/>}/>
        <Route path="/movies" element={<Movies/>}/>
    </Routes>
    </>
  )
}

export default App
