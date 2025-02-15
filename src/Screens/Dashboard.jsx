import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Student from './Student';

const Dashboard = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%'
      }}>
        <Navbar />
      </div>

      <div style={{
        paddingTop: '64px' 
      }}>
        <br />
        <br />
       <Student content='jvsvjsb ' />
      </div>
    </div>
  );
};

export default Dashboard;