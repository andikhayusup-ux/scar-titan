
import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [halaman, setHalaman] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (halaman === 'login') {
    return (
      <LoginScreen
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onLogin={() => setHalaman('home')}
      />
    );
  }

  return (
    <HomeScreen
      email={email}
      onLogout={() => {
        setHalaman('login');
        setEmail('');
        setPassword('');
      }}
    />
  );
}
