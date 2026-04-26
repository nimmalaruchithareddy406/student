function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Student Management System</h1>
        <p>
          A complete platform to manage student records, scholarships, payments
          and academic performance.
        </p>
        <button>Explore Features</button>
      </section>

      <h2>Our Services</h2>

      <div className="services">
        <div className="card">
          <h3>Student Registration</h3>
          <p>Register students with complete academic details.</p>
        </div>

        <div className="card">
          <h3>Student Details</h3>
          <p>View and manage student academic information easily.</p>
        </div>

        <div className="card">
          <h3>Scholarship</h3>
          <p>Apply for scholarships based on eligibility.</p>
        </div>

        <div className="card">
          <h3>Payment System</h3>
          <p>Secure and simple fee payment system.</p>
        </div>

        <div className="card">
          <h3>CGPA Calculator</h3>
          <p>Calculate CGPA quickly and accurately.</p>
        </div>
      </div>

      <h2>Why Choose Us?</h2>

      <div className="services">
        <div className="card">
          <h3>User Friendly</h3>
          <p>Simple and easy interface for all users.</p>
        </div>

        <div className="card">
          <h3>Secure</h3>
          <p>Your data is safe and protected.</p>
        </div>

        <div className="card">
          <h3>Fast Access</h3>
          <p>Quick access to all student services.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;