function Login() {
  return (
    <div className="page">
      <h1>Student Login</h1>

      <div className="card">
        <input type="text" placeholder="Enter Roll Number" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;