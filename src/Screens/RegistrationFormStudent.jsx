import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
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
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import {useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const drawerWidth = 240;


const Card = styled(MuiCard)(({ theme }) => ({
  // ... (Card styles - same as before)
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
}));





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
      { label: 'Student Registration', path: '/studentregistration' },
    ],
  },
  {
    label: 'Syllabus',
    subItems: [
      { label: 'Syllabus List', path: '/syllabuslist' },
    ],
  },
  {
    label: 'Class',
    subItems: [
      { label: 'TimeTable', path: '/tmtable' },
    ],
  },
  {
    label: 'Fees',
    subItems: [
      { label: 'Fee Challan', path: '/fees' },
    ],
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
    subItems: [
      { label: 'Result', path: '/resultsrc' },
    ],
  },
];


function Studentregistration(props ) {
   
  const [useremail, setuseremail] = React.useState('');
  const [name, setName] = React.useState('');


  const [formdata , setformdata] = React.useState({
    name:'' ,
    useremail:'' ,
  })
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const buttonpost = ()=>{
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:3000/data' , ...formdata);
          setData(response.data)
        } catch (err) {
          setError(error);
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  }


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [open, setOpen] = React.useState({}); // State to manage dropdown open/close
  
  
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
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
             
                <h1>Student Register</h1>

        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Register
          </Typography>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Jon Snow"
                value={name} // Bind the value to the state
                onChange={(e) => setName(e.target.value)} 
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                value={useremail}
                onChange={(e) => setuseremail(e.target.value)}
              />
            </FormControl>


            <FormControl>
              <FormLabel >Class</FormLabel>
              <TextField
                required
                fullWidth
                id="class"
                placeholder="Classname"
                variant="outlined"
                value={useremail}
                onChange={(e) => setuseremail(e.target.value)}
              />
            </FormControl>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={buttonpost}
            >
              Register
            </Button>
          </Box>

        </Card>
      </SignUpContainer>
      </Box>
    </Box>
  );
}

Studentregistration.propTypes = {
  window: PropTypes.func,
};

export default Studentregistration;