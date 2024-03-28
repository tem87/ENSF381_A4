import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <Header />
            <div>
                {isLogin ? <LoginForm switchToSignup={switchForm} /> : <SignupForm switchToLogin={switchForm} />}
            </div>
            <Footer />
        </div>
    );
    };
    export default LoginPage;