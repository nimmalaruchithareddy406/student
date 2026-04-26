function Scholarship() {
  return (
    <div className="page">
      <h1>Apply for Scholarship</h1>

      <div className="card">
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="Roll Number" />
        <input type="number" placeholder="Annual Income" />
        <input type="number" placeholder="CGPA" />
        <select>
          <option>Select Category</option>
          <option>General</option>
          <option>BC</option>
          <option>SC/ST</option>
        </select>
        <button>Apply</button>
      </div>
    </div>
  );
}

export default Scholarship;