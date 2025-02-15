import React, { useState } from 'react';
import '../App.css'; 
const ExamResult = () => {
  const [studentName, setStudentName] = useState('John Doe'); 
  const [results, setResults] = useState([
    { subject: 'Math', score: 85, grade: 'B' },
    { subject: 'Science', score: 92, grade: 'A' },
    { subject: 'English', score: 78, grade: 'C' },
    { subject: 'History', score: 88, grade: 'B+' },
    { subject: 'Computer Science', score: 95, grade: 'A+' },
  ]);

  const calculateOverallGrade = () => {
    const totalScore = results.reduce((sum, result) => sum + result.score, 0);
    const averageScore = totalScore / results.length;

    if (averageScore >= 90) return 'A+';
    if (averageScore >= 80) return 'A';
    if (averageScore >= 70) return 'B';
    if (averageScore >= 60) return 'C';
    if (averageScore >= 50) return 'D';
    return 'F';
  };

  const overallGrade = calculateOverallGrade();


  return (
    <div className="exam-result-container">
      <h1>Exam Results</h1>
      <div className="student-info">
        <p><strong>Name:</strong> {studentName}</p>
      </div>

      <table className="result-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.subject}</td>
              <td>{result.score}</td>
              <td>{result.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="overall-result">
        <p><strong>Overall Grade:</strong> {overallGrade}</p>
      </div>

      <button onClick={() => window.print()}>Print Results</button>
    </div>
  );
};

export default ExamResult;