function Payment() {
  return (
    <div className="page">
      <h1>Payment Page</h1>

      <div className="card">
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Roll Number" />
        <input type="number" placeholder="Amount" />
        <select>
          <option>Select Payment Type</option>
          <option>Exam Fee</option>
          <option>Tuition Fee</option>
          <option>Library Fee</option>
        </select>
        <button>Pay Now</button>
      </div>
    </div>
  );
}

export default Payment;