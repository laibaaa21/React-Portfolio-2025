import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="p-8">
      <h2 className="education-heading">Education Background</h2>
      <table className="education-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="bs-highlight">BS</span> Computer Science</td>
            <td className="institution-text">Information Technology University</td>
            <td className="year-text">2022 - Present</td>
            <td className="details-text">Current CGPA: 3.4</td>
          </tr>
          <tr>
            <td>A-Levels</td>
            <td className="institution-text">Lahore Grammar School</td>
            <td className="year-text">2020 - 2022</td>
            <td className="details-text">Math (A), Physics (B), IT (B)</td>
          </tr>
          <tr>
            <td>O-Levels</td>
            <td className="institution-text">AES</td>
            <td className="year-text">2018 - 2020</td>
            <td className="details-text">Grades: 7A*, 1A</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
