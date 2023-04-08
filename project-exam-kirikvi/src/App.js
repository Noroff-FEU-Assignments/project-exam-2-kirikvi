import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import PostsPage from './components/posts/pages/PostsPage';
import PostPage from './components/posts/pages/PostPage';
import PostsByFollowingPage from './components/posts/pages/PostsByFollowingPage';
import Nav from './components/layout/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />

      <div>
        <Routes>
          <Route exact path="/" element={<PostsPage />} />
          <Route exact path="/postsbyfollowing" element={<PostsByFollowingPage />} />
          <Route exact path="/posts/:id" element={<PostPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
