function Register() {
  return (
    <div className="page">
      <h1>Student Registration</h1>

      <div className="card">
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Roll Number" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="text" placeholder="Department" />
        <input type="text" placeholder="Year" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;