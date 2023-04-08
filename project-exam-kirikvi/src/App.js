import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Nav from './components/layout/Nav';
import { AuthProvider } from './context/AuthContext';

//Route paths
import LoginPage from './components/login/LoginPage';
import PostsPage from './components/posts/pages/PostsPage';
import PostPage from './components/posts/pages/PostPage';
import PostsByFollowingPage from './components/posts/pages/PostsByFollowingPage';
import ProfilesPage from './components/profiles/pages/ProfilesPage';
import ProfilePage from './components/profiles/pages/ProfilePage';
import UserProfilePage from './components/profiles/pages/UserProfilePage';
import RegisterPage from './components/register/RegisterPage';

//styling
import './App.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />

        <div>
          <Routes>
            <Route exact path="/" element={<PostsPage />} />
            <Route exact path="/postsbyfollowing" element={<PostsByFollowingPage />} />
            <Route exact path="/posts/:id" element={<PostPage />} />
            <Route exact path="/userprofile" element={<UserProfilePage />} />
            <Route exact path="/profiles" element={<ProfilesPage />} />
            <Route exact path="/profiles/:name" element={<ProfilePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        
      </Router>
    </AuthProvider>


  );
}

export default App;
