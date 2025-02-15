import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%; // Full width
  background-color: #f0f0f0; // Light gray background
  border-radius: 8px; // Rounded corners
  padding: 20px; // Padding inside the card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow
  margin-bottom: 16px; // Space between cards (if you have multiple)
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #333; // Darker text color for title
`;

const Teacher = styled.p`
  font-size: 1rem;
  color: #666; // Slightly lighter text color for teacher
`;

const Card = ({ subject, teacher }) => {
  return (
    <CardContainer>
      <Title>{subject}</Title>
      <Teacher>{teacher}</Teacher>
    </CardContainer>
  );
};


const App = () => {
  const subjects = [
    { name: "Mathematics", teacher: "Mr. Smith" },
    { name: "Science", teacher: "Ms. Johnson" },
    { name: "English Literature", teacher: "Dr. Brown" },
    { name: "Business Accounts", teacher: "Mr. Lee" }, 
    { name: "Economics", teacher: "Ms. Davis" },     
    { name: "Computer Science", teacher: "Dr. Garcia"}, 
    { name: "History", teacher: "Mr. Rodriguez"},     
    { name: "Chemistry", teacher: "Ms. Wilson"},      
    { name: "Physics", teacher: "Dr. Anderson"}, 
  ];

  return (
    <div>
      {subjects.map((subject, index) => (
        <Card key={index} subject={subject.name} teacher={subject.teacher} />
      ))}
    </div>
  );
};

export default App;