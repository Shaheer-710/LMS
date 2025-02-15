import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom'; 
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Student from './Screens/Student';
import Dashboard from './Screens/Dashboard';
import RegistrationFormStudent from './Screens/RegistrationFormStudent';
import Teacherregistrationscreen from './Screens/Teacherregistrationscreen'
import TeacherList from './Screens/TeacherList'
import Subjectlist from './Screens/Subjectlist';
import Sylabuslist from './Screens/Syllabuslist';
import ClassTimetable from './Screens/Classtimetable';
import Fees from './Screens/Fees';
import Result from './Screens/ExamResultScreen';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}> 
        <Route path="student" element={<Student />} />
      </Route>
        <Route path="/studentregestration" element={<RegistrationFormStudent />} />
        <Route path="/teacherregister" element={<Teacherregistrationscreen />} />
        <Route path="/teacherlist" element={<TeacherList />} />
        <Route path="/subjectlist" element={<Subjectlist />} />
        <Route path="/syllabuslist" element={<Sylabuslist />} />
        <Route path="/tmtable" element={<ClassTimetable />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/resultsrc" element={<Result />} />
    </Routes>
  );
};

export default App;