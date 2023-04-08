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
import SingleProfileDetails from './components/profiles/SingleProfileDetails';
import UserProfilePage from './components/profiles/pages/UserProfilePage';
import RegisterPage from './components/register/RegisterPage';

//styling
import './App.css';
import Container from './components/layout/container/Container';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Nav />

          <div>
            <Routes>
              <Route path="/" element={<PostsPage />} />
              <Route path="/postsbyfollowing" element={<PostsByFollowingPage />} />
              <Route path="/posts/:id" element={<PostPage />} />
              <Route path="/userprofile" element={<UserProfilePage />} />
              <Route path="/profiles" element={<ProfilesPage />} />
              <Route path="/profiles/:name" element={<SingleProfileDetails />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route exact path="/login" element={<LoginPage />} />
            </Routes>
          </div>
          </Container>
      </Router>
    </AuthProvider>


  );
}

export default App;
