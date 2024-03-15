import './App.css'
import { Footer } from './components/footer/Footer'
import { Main } from './components/main/Main'
import { Navbar } from './components/navbar/Navbar'
import { ArticleContent } from './components/main/ArticleContent'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/article" element={<ArticleContent />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
