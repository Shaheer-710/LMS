import React, { useState } from 'react';
import styled from 'styled-components'; 

const timetableData = [
  { day: 'Monday', periods: ['Math', 'Science', 'English', 'History'] },
  { day: 'Tuesday', periods: ['Science', 'Math', 'Geography', 'Computer'] },
  { day: 'Wednesday', periods: ['English', 'History', 'Math', 'Science'] },
  { day: 'Thursday', periods: ['Computer', 'Geography', 'Science', 'Math'] },
  { day: 'Friday', periods: ['Math', 'English', 'History', 'Science'] },
];


const TimetableContainer = styled.div`
  width: 100%; 
  overflow-x: auto; /
`;

const TimetableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; 
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    overflow: hidden; 
    white-space: nowrap;
    
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  /* Responsive adjustments (example) */
  @media (max-width: 600px) {
    font-size: 12px;
    td, th {
       padding: 5px; /* Reduce padding on smaller screens */
    }
  }
`;


const Timetable = () => {
  return (
    <TimetableContainer>
      <TimetableTable>
        <thead>
          <tr>
            <th>Day</th>
            <th>Period 1</th>
            <th>Period 2</th>
            <th>Period 3</th>
            <th>Period 4</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((dayData) => (
            <tr key={dayData.day}>
              <td>{dayData.day}</td>
              {dayData.periods.map((period, index) => (
                <td key={index}>{period}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </TimetableTable>
    </TimetableContainer>
  );
};

export default Timetable;