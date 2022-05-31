import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home, CreatePost, Post } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='menu-list'>
          <NavLink to="/" className={({isActive})=> (isActive? 'active' : '')  }>Home Page</NavLink>
          <NavLink to="/createpost" className={({isActive})=> (isActive? 'active' : '')}>Create A Post</NavLink>
        </div>
        <Routes>
          <Route index exactly element={<Home />} />
          <Route path='/createpost' exactly element={<CreatePost />} />
          <Route path='/post/:id' exactly element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;