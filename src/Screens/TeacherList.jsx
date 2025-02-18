import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '../component/Button/Button';
import Table from '../component/Table/Table'
import { useNavigate, useLocation } from 'react-router-dom';


const drawerWidth = 240;



const menuItems = [
  {
    label: 'Students',
    subItems: [
      { label: 'Student Registration', path: '/studentregestration' },
      { label: 'Student List', path: '/dashboard/student' },
    ],
  },
  {
    label: 'Teacher',
    subItems: [
      { label: 'Teacher Registration', path: '/teacherregister' },
      { label: 'Teacher List', path: '/teacherlist' },
    ],
  },
  {
    label: 'Subjects',
    subItems: [{ label: 'Subject List', path: '/subjectlist' }],
  },
  {
    label: 'School',
    subItems: [
      { label: 'Teacher Registration', path: '/teacherregister' },
      { label: 'Student Registration', path: '/studentregestration' },
    ],
  },
  {
    label: 'Syllabus',
    subItems: [{ label: 'Syllabus List', path: '/syllabuslist' }],
  },
  {
    label: 'Class',
    subItems: [{ label: 'TimeTable', path: '/timetable' }],
  },
  {
    label: 'Fees',
    subItems: [{ label: 'Fee Challan', path: '/fees' }],
  },
  {
    label: 'Admission',
    subItems: [
      { label: 'Student Admission', path: '/studentregestration' },
      { label: 'Teacher Admission', path: '/teacherregister' },
    ],
  },
  {
    label: 'Exam',
    subItems: [{ label: 'Result', path: '/resultsrc' }],
  },
];


function Student(props , {content}) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState({}); // State to manage dropdown open/close
  
  const buttonAdd = () =>{
    navigate("/studentregestration" )
  }
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  
  const handleClick = (label) => {
    setOpen({ ...open, [label]: !open[label] });
  };


  const isPathActive = (path) => { 
    return location.pathname === path;
};
  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item ) => (
          <React.Fragment key={item.label}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick(item.label)}>
                <ListItemText primary={item.label} />
                {open[item.label] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={open[item.label]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem key={subItem.label} disablePadding>
                    <ListItemButton
                      sx={{ pl: 4, backgroundColor: isPathActive(subItem.path) ? '#e0e0e0' : 'transparent' }} // Highlight active link
                      onClick={() => {
                        navigate(subItem.path);
                        if (mobileOpen) {
                          handleDrawerClose();
                        }
                      }}
                    >
                      <ListItemText primary={subItem.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  const navigate = useNavigate(); 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Learning Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className='stdlist'>
          <div className="headings">
            <h1>Teacher List</h1>
            <Button onClick={buttonAdd}>Add</Button>
          </div>
          <Table />
        </div>

      </Box>
    </Box>
  );
}

Student.propTypes = {
  window: PropTypes.func,
};

export default Student;