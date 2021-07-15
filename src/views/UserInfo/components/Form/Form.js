import React, { createRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField,Avatar,Paper } from '@material-ui/core';
import validate from 'validate.js';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },

}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  // firstName: {
  //   presence: { allowEmpty: false, message: 'is required' },
  //   length: {
  //     maximum: 120,
  //   },
  // },
  // lastName: {
  //   presence: { allowEmpty: false, message: 'is required' },
  //   length: {
  //     maximum: 120,
  //   },
  // },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 8,
    },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };
  //  const { password, confirmPassword } = this.state;
  // // perform all neccassary validations
  // if (password !== confirmPassword) {
  //     alert("Passwords don't match");
  // }
  const handleSubmit = event => {
    event.preventDefault();

    if (formState.isValid) {
      window.location.replace('/');
    }
    // if (password !== confirmPassword) {
    //   alert("Passwords don't match");
    // }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;
////////////////////////////////////////////////////////////////////////////
  const [image, _setImage] = useState(null);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  /**
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };
  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="flex-end" >

          <Grid item xs= {3} container justifyContent="center">
            <Paper variant="outlined" square><Avatar variant="square" alt="A" 
            src={image}
            className={classes.large}
            ></Avatar></Paper>
          </Grid>
          <Grid item xs= {9} >
          <input
            accept="image/*"
            style = {{ display: 'none'}}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleOnChange}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
            variant="outlined"
            label="Company Name *"
            defaultValue="ABC ltd"
            // helperText="Company Name"
            variant="outlined"
            size="medium"
            fullWidth
            // helperText={hasError('email') ? formState.errors.email[0] : null}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
             // placeholder="E-mail"
              // disabled 
              defaultValue="abc@abc.com"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              // helperText={hasError(null) ? formState.errors.email[0] : null}
              // error={hasError('email')}
              onChange={handleChange}
              type="email"
              // value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // disabled
              defaultValue="Password"
              label="Password *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              // helperText={
              //   hasError('password') ? formState.errors.password[0] : null
              // }
              // error={hasError('password')}
              onChange={handleChange}
              type="password"
              // value={formState.values.password || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // disabled
              defaultValue="Password"
              label="Confirm Password *"
              variant="outlined"
              size="medium"
              name="confirmPassword"
              fullWidth
              helperText={
                hasError('') ? formState.errors.password[0] : null
              }confirmPassword
              // error={hasError('password')}
              onChange={handleChange}
              type="password"
              // value={formState.values.password || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              // onclick = {handleOnSubmit}
            >
              Save  
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
