import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// TODO: Create first time login form

import React from 'react'

// imports for mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import ToolTip from '@mui/material/ToolTip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import MuiCard from '@mui/material/Card';

import { styled } from '@mui/material/styles';

import { z } from 'zod';
import { Controller } from 'react-hook-form';
import { HookForm } from './HookForm'
import { UpdatePasswordValues } from './types'

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '"Inter"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#4e36f5',
    borderColor: '#0062cc',
    boxShadow: '8',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const schema = z.object({
  password: z
    .string()
    .min(12)
    .regex(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&_*])/)),
  confirm_password: z
    .string(),
}).refine((data) => data.password === data.confirm_password, {
  message: 'Must match password',
  path: ['confirm_password'],
});

function App() {
  const [count, setCount] = useState(0)

  // specific field's tooltip will be opened
  const [tooltip, setTooltip] = React.useState<null | number>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  // const 

  return (
    <>
    <HookForm<UpdatePasswordValues, typeof schema>
      onSubmit={(data) => console.log(data)}
      schema={schema}
      options={{
        defaultValues: {
          password: '',
          confirm_password: '',
        },
      }}
    >
      {({ 
        control 
      }) =>  (
        <FormControl fullWidth>
          <Box
        sx={{
          padding: '24px',
          maxWidth: '600px',
          width: '600px',
          textAlign: 'left',
        }}
      >
        <Container>
          <Paper 
          elevation={1}
          sx={{
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
          }}
          >
            <MuiCard
              sx={{
              borderRadius: '16px',
                padding: '24px',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardHeader
               title="First Time Login"
               subheader="Please change default password"
              />
              <CardContent>
                <Stack 
                  display="flex" 
                  width="100%"
                  divider={<div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />}
                >
                  <Stack
                   spacing={2}
                  >
                    <Controller
                      name='password'
                      control={control}
                      render={({
                        field: { onChange },
                        fieldState: { error },
                      }) => (
                        <ToolTip
                      title={(
                        <>
                          <p>✅ Must be at least 12 characters long.</p>
                          <p>
                            ✅ Must contain at least 1 of the following:
                            a-z, A-Z, 0-9, and a special character (!, @, #, $, %, ^, &, _, or *).
                          </p>
                        </>
                        )}
                      open={tooltip === 1}
                      arrow
                      placement="top"
                    >
                      <FormControl>
                      <FormLabel
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 500,
                        }}
                      >
                        New Password
                      </FormLabel>
                      <OutlinedInput 
                        placeholder="Enter new password" 
                        size='small' 
                        type={showPassword ? 'text' : 'password'}
                        helper-text = 'Password does not match'
                        onBlur = {() => setTooltip(null)}
                        onChange={onChange}
                        error={!!error?.message}
                        onFocus = {() => setTooltip(1)}
                        endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword((show) => !show)}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                              </IconButton>
                            </InputAdornment>
                        }
                      />
                      {!!error && (
                        <FormHelperText error>
                          {error.message}
                        </FormHelperText>
                      )
                      }
                    </FormControl>
                    </ToolTip>
                      )} 
                    />
                    <Controller
                      name='confirm_password'
                      control={control}
                      render={({
                        field: { onChange },
                        fieldState: { error },
                      }) => (
                        
                      <FormControl>
                      <FormLabel
                        sx={{
                          fontSize: '0.85rem',
                          fontWeight: 500,
                        }}
                      >
                        Confirm New Password
                      </FormLabel>
                      <OutlinedInput 
                        placeholder="Confirm new password"
                        id="confirm-password-input" 
                        size='small' 
                        type={showPassword ? 'text' : 'password'}
                        onChange={onChange}
                        // helpertext={error?.message ? error.message : null}
                        error={!!error?.message}
                        helper-text = 'Password does not match'
                        endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword((show) => !show)}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                              </IconButton>
                            </InputAdornment>
                        }
                      />
                       {!!error && (
                        <FormHelperText error>
                          {error.message}
                        </FormHelperText>
                      )
                      }
                    </FormControl>
                      )} 
                    />          
                    <BootstrapButton variant='contained' color='primary' type='submit'>
                      Save
                    </BootstrapButton>
                  </Stack>
                </Stack>
              </CardContent>
            </MuiCard>
          </Paper>
        </Container>
      </Box>
        </FormControl>
      )}
    </HookForm>
      
    </>
  )
}

export default App
