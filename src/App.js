import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {BookProvider} from './context/BookContext.js'
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';
import SingleBook from './pages/SingleBook';
import About from './pages/About';

function App() {
  return (
    <Router>
    <BookProvider>    
      <Navbar />
    <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/about' element={<About  />} />
      <Route path='/search-results' element={<SearchResults />} />
      <Route path='/book/:id' element={<SingleBook />} />
    </Routes>
    </BookProvider>
    </Router>
  );
}

export default App;