import { useState } from "react";

function CGPA() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [s4, setS4] = useState("");
  const [cgpa, setCgpa] = useState("");

  const calculateCGPA = () => {
    const total =
      Number(s1) + Number(s2) + Number(s3) + Number(s4);

    const result = total / 4;
    setCgpa(result.toFixed(2));
  };

  return (
    <div className="page">
      <h1>CGPA Calculator</h1>

      <div className="card">
        <input
          type="number"
          placeholder="Semester 1 GPA"
          onChange={(e) => setS1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Semester 2 GPA"
          onChange={(e) => setS2(e.target.value)}
        />
        <input
          type="number"
          placeholder="Semester 3 GPA"
          onChange={(e) => setS3(e.target.value)}
        />
        <input
          type="number"
          placeholder="Semester 4 GPA"
          onChange={(e) => setS4(e.target.value)}
        />

        <button onClick={calculateCGPA}>Calculate CGPA</button>

        {cgpa && <h2>Your CGPA is: {cgpa}</h2>}
      </div>
    </div>
  );
}

export default CGPA;