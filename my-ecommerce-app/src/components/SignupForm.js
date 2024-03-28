import React, { useState} from 'react';

const SignupForm = ({switchToLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() !== '' && password.trim() !== '' && email.trim() !== '' && confirmPassword.trim() !== '') 
        {
            if(password === confirmPassword) {
                console.log('Signing up...');
            }
            else {
                alert('Passwords do not match. Try agaian');
            }
        } 
        else {
                alert('Please fill in all fields.');
            }
        };
        return (
            <form onSumbit={handleSubmit}>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <button type='submit'>Signup</button>
            <button type='button' onClick={switchToLogin}>Switch to Login</button>

            </form>
        );
};

export default SignupForm;
            