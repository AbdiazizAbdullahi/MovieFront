import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import VotingPage from './pages/Votes';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyReview from './pages/MyReview';
import MyVotes from './pages/MyVotes';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/myvotes" element={<MyVotes/>} />
        <Route path="/myreviews" element={<MyReview/>} />
        <Route path="/sci-fi" render={() => <VotingPage category="sci-fi" />} />
        <Route path="/horror" render={() => <VotingPage category="horror" />} />
        <Route path="/action" render={() => <VotingPage category="action" />} />
        <Route path="/comedy" render={() => <VotingPage category="comedy" />} />
      </Routes>
    </Router>
  );
}

export default App;
