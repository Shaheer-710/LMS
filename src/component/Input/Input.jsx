import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({placeholder , type }) {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}> 
      <TextField 
        fullWidth 
        type={type}
        placeholder={placeholder} 
        id="fullWidth" 
        sx={{ 
          '& .MuiOutlinedInput-root': { 
            borderRadius: '10px', 
          }, 
        }} 
      />
    </Box>
  );
}