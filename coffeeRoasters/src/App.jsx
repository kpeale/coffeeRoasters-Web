import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Create from './Pages/Create';
import Home from './Pages/Home';
import Indexpage from './Pages/Indexpage';
import Navigation from './Pages/Navigation';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Indexpage />}
        >
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/create'
            element={<Create />}
          />
          <Route
            path='/navigation'
            element={<Navigation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
