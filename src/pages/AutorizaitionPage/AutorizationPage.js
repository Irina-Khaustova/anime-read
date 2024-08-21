import React, { useState } from 'react';
import { Container, Paper} from '@mui/material';
import {CssBaseline} from '@mui/material';
import {TextField} from '@mui/material';
import {Avatar} from '@mui/material';
import {Button} from '@mui/material'
import {Grid} from '@mui/material';
import {Typography} from '@mui/material';
import {Link} from '@mui/material';
import {Box} from '@mui/material';
import img from '../../img/Gray.png';
import { useLogInMutation } from '../../myApi/myApi';


// const useStyles = styled(theme => ({
//   root: {
//     height: '100vh',
//     backgroundImage: `url(${img})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
    
//   },
//   container: {
//     backgroundColor: 'gray',
//   },
//   image: {
//     backgroundImage: 'url(../../img/Gray.png)',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     position: 'absolute',
//     height: '100%',
//   }, 
//    paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const AutorizationPage = () => {
  // const classes = useStyles();

  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [passwordlValue, setPasswordlValue] = useState('');
  const [userNameValue, setUserNameValue] = useState('');

  const [logIn, result] = useLogInMutation();

  // const onSigninSubmit = () => {
  //   if (!emailError) {
  //     logIn({emailValue, passwordlValue})
  //   }
  // }

  const onSigninSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await logIn({ 'email': emailValue, 'username': userNameValue, 'password': passwordlValue }).unwrap();
      console.log('User Data:', userData);
      // Можно здесь сохранить токен или выполнить перенаправление
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  const onEmailChange = (event) => {
    console.log(event.target.value)
    setEmailValue(event.target.value);
    validateEmail(event.target.value);
  }

  const onPasswordChahge = (event) => {
    setPasswordlValue(event.target.value);
  }

  const onUserNameChahge = (event) => {
    setUserNameValue(event.target.value);
  }

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(true);
      setHelperText('Please enter a valid email address');
    } else {
      setEmailError(false);
      setHelperText('');
    }
  }

  return (
    <>
    <Box maxWidth="false" sx={{width: '100%', margin: '0', paddingLeft: '0'}}>
        <Container maxWidth="false" component="main" sx={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', width: '100%', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
        <Container  maxWidth='70%' sx={{padding: '2rem', height: '60%'}}>
          <Avatar >
          </Avatar>
          <Typography component="h1" variant="h5"> 
            Заходите на сайт, всегда Вам рады!
          </Typography>
          <form  onSubmit={onSigninSubmit} noValidate sx={{width: '30%'}}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              error={emailError}
              helperText={helperText}
              label="Электронная почта"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailValue}
              type="email"
              onChange={onEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="outlined-password-input"
              autoComplete="current-password"
              value={passwordlValue}
              onChange={onPasswordChahge}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userName"
              label="Ник"
              type="text"
              id="userName"
              autoComplete="userName"
              value={userNameValue}
              onChange={onUserNameChahge}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  "Нет учетной записи? Регистрация"
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
             
            </Box>
          </form>
        </Container>
      </Grid>
    </Container>
    </Box>
    </>
  );
}

export default AutorizationPage;