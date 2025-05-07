import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import TodoApp from './components/TodoApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showLogin, setShowLogin] = useState(true);

  if (!isLoggedIn) {
    return showLogin
      ? <Login onLogin={() => setIsLoggedIn(true)} onSwitch={() => setShowLogin(false)} />
      : <Signup onSwitch={() => setShowLogin(true)} />;
  }

  return <TodoApp onLogout={() => setIsLoggedIn(false)} />;
}

export default App;
