import React, { useState } from 'react';
import './SignIn.css'

function SignIn({ onLogin }) {
  const [username, setUsername] =useState('');
  const [password, setPassword] =useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //Simulacion de roles 
    if (username === 'admin' && password === 'admin123') {
      onLogin('admin');
    } else if (username === 'user' && password === 'user123') {
      onLogin('user');
    } else {
      alert('Su usuario no se encuentra registrado')
    }
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
        <h2>Let’s <span className="highlight">Travel</span> you in.</h2>
        <h4>Discover the World with Every Sign In</h4>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <a href="#" className="forgot-password">Forgot password?</a>
        <button type="submit" >Sign In</button>
        <div className="alternative-sign-in">
          <p>or sign in with</p>
          <div className="sign-in-options">
            <button className="google-sign-in">Google</button>
            <button className="apple-sign-in">Apple</button>
            <button className="facebook-sign-in">Facebook</button>
          </div>
        </div>
        <p className="no-account">Don’t have an account?</p>
        <button className="sign-up">Sign Up</button>
      </form>
    </div>
  );
}

export default SignIn;