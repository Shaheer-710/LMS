import React from 'react';
import styled from 'styled-components'; 

const ChallanContainer = styled.div`
  width: 80%; // Adjust as needed
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 20px;
  font-family: sans-serif;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2); //Optional shadow
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left; /* Or center/right as needed */
`;

const Footer = styled.div`
  text-align: right;
`;

const FeeChallan = () => { 
  return (
    <ChallanContainer>
      <Header>
        <h2>Credo</h2>
        <p>Idk</p>
      </Header>

      <Details>
        <div>
          <p><strong>Challan No:</strong> 2256</p>
          <p><strong>Issue Date:</strong> 2/2/24</p>
          <p><strong>Due Date:</strong> 4/4/25</p>
        </div>
        <div>
          <p><strong>Student Name:</strong> Sajad</p>
          <p><strong>Class:</strong> 9</p>
          <p><strong>Roll No:</strong> 12345</p>
        </div>
      </Details>

      <Table>
        <thead>
          <tr>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
          </tr>
        </thead>
        <tbody>
      
              <TableCell>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere rem dolorum dolor!</TableCell>
              <TableCell>1234500</TableCell>
          <tr>
            <TableCell><strong>Total</strong></TableCell>
            <TableCell><strong>1234500</strong></TableCell>
          </tr>
        </tbody>
      </Table>

      <Footer>
      </Footer>
    </ChallanContainer>
  );
};

export default FeeChallan;


