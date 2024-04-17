import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home"
import About from "./components/About"
import ArticlesList from "./components/ArticlesList"
import Article from "./components/Article"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className='max-w-700 mx-auto pt-16 text-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles' element={<ArticlesList />} />
            <Route path='/articles/:articleId' element={<Article />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
