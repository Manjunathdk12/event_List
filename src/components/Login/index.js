import "./index.css"
const Login = () => (
  <div className="login-container">
    <h2>Login Page</h2>
    <input type="text" placeholder="Username" className="login-input" />
    <input type="password" placeholder="Password" className="login-input" />
    <button className="login-button">Login</button>
  </div>
)

export default Login
