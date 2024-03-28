import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const history = useHistory(); // Use useHistory here

  const switchForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = () => {
    history.push('/products');
  };

  const handleSignup = () => {

    history.push('/products');
  };

  return (
    <div>
      <Header />
      {showLogin ? <LoginForm switchToSignup={switchForm} handleLogin={handleLogin} /> : <SignupForm switchToLogin={switchForm} handleSignup={handleSignup} />}
      <Footer />
    </div>
  );
};

export default LoginPage;
