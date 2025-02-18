import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set , push } from "firebase/database"; 
import auth from '../FirebaseConfig'; 

const Card = styled(MuiCard)(({ theme }) => ({
  // ... (Card styles - same as before)
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
}));

export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [useremail, setuseremail] = React.useState('');
  const [userpassword, setuserpassword] = React.useState('');
  const [name, setName] = React.useState(''); 

  const navigate = useNavigate();
  const validateInputs = () => {
    let isValid = true;

    if (!name || name.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }


    if (!useremail || !/\S+@\S+\.\S+/.test(useremail)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!userpassword || userpassword.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const redirect = ()=> {
    navigate('/login');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInputs()) {
      createUserWithEmailAndPassword(auth, useremail, userpassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up:", user);
          navigate('/login');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign Up Error:", errorCode, errorMessage);
          setPasswordError(true);
          console.log(error);
          
        });
    }

    const db = getDatabase()
    const userRef = push(ref(db,'users/userdetails'))
    set(userRef, {
      email: useremail,
      name: name, 
    })
    .then(() => {
      navigate('/login');
    })
    .catch((error) => {
      console.error("Error writing to database:", error);
    });
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
                value={name} // Bind the value to the state
                onChange={(e) => setName(e.target.value)} // Update state on change
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
                error={emailError}
                helperText={emailErrorMessage}
                color={emailError ? 'error' : 'primary'} // Corrected color logic
                value={useremail}
                onChange={(e) => setuseremail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'} // Corrected color logic
                value={userpassword}
                onChange={(e) => setuserpassword(e.target.value)}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive updates via email."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign up
            </Button>
          </Box>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Button onClick={redirect}  variant="body2" sx={{ alignSelf: 'center' }}>
              Sign in
            </Button>
          </Typography>
        </Card>
      </SignUpContainer>
    </>
  );
}