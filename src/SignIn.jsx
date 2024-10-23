import './SignIn.css'

function SignIn({ onLogin }) {
    return (
      <div className="sign-in">
        <form>
          <h2>Let’s <span className="highlight">Travel</span> you in.</h2>
          <h4>Discover the World with Every Sign In</h4>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="button" onClick={onLogin}>Sign In</button>
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