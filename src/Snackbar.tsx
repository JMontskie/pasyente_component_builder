import { useState } from 'react'
import './App.css'

// TODO: Create snack bar component and make it reusable (can be used in other components)
// TODO: Snack bar should be able to take in a message and a severity
//  - Severity should be one of 'error', 'warning', 'info', 'success'
//  - Message should be a string
//  - Snack bar should be able to be dismissed and should disappear after 5 seconds


import React from 'react'

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

 
  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        // action={
        //   <React.Fragment>
        //     <Button color="secondary" size="small" onClick={handleClose}>
        //       CLOSE
        //     </Button>
        //   </React.Fragment>
        // }
        onClose={handleClose}
      >
        <Alert
        onClose={handleClose}
        severity='error'
        variant='filled'
        sx={{ width: '100%' }}
        >
          This is an error message!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
