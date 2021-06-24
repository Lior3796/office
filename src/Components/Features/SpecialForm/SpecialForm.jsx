import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';


function SpecialForm() {
    
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
     const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField error id="standard-basic" label="Standard" />
      <TextField error id="filled-basic" label="Filled" variant="filled" />
      <TextField error id="outlined-basic" label="Outlined" variant="outlined" />
      <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
    </form>
  );
}
export default SpecialForm;
