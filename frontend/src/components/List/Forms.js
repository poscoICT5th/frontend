
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Forms() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <div>
        <TextField
          label="Size"
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          // defaultValue="Normal"
          variant="standard"
          placeholder='test'
        />
      </div>
    </Box>
  
  )
}

export default Forms