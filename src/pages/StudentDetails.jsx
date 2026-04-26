import { useState } from "react";

function StudentDetails() {
  const [search, setSearch] = useState("");

  const students = [
    { roll: "21A91A0501", name: "Ravi", branch: "CSE", cgpa: "8.7" },
    { roll: "21A91A0502", name: "Sita", branch: "ECE", cgpa: "9.1" },
    { roll: "21A91A0503", name: "Arjun", branch: "EEE", cgpa: "8.3" },
    { roll: "21A91A0504", name: "Pooja", branch: "IT", cgpa: "9.4" },
    { roll: "21A91A0505", name: "Kiran", branch: "MECH", cgpa: "7.9" },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.roll.toLowerCase().includes(search.toLowerCase()) ||
    student.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Check Student Details</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Search by name, roll number or branch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Branch</th>
              <th>CGPA</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.roll}</td>
                  <td>{student.name}</td>
                  <td>{student.branch}</td>
                  <td>{student.cgpa}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No student found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentDetails;