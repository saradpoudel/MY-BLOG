import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './page/NavBar';
import Home from "./page/Home"
import About from "./page/About"
import ArticlesList from "./page/ArticlesList"
import Article from "./page/Article"
import NotFoundPage from './page/NotFoundPage';
import Footer from './page/Footer';
import LoginPage from './page/Login';
import CreateAccountPage from './page/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className='max-w-700 mx-auto pt-10 text-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles' element={<ArticlesList />} />
            <Route path='/articles/:articleId' element={<Article />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

