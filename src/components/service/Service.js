import React, { useState } from 'react';
/* import ReactDOM from 'react-dom'; */
import { Form, Field } from 'react-final-form';
import { Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import GlobalHeader from '../GlobalHeaders';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}

/* const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
}; */


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export default function Services({ next, back }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const [Header, setHeader] = useState({
    TokenNo: "",
    ServiceDate: new Date(),
    MRNo: 'recID',
    Ward: "",
    Amount: "",
    TotalAmount: "",
    PatientContribution: "",
    Remarks: "",
    CreatedUser: "Admin",
    ModifyUser: "Admin"
  })
  const handleSubmit = (e) => {
    //validate();
    e.preventDefault();
    setHeader(e.target.value);
    console.log(err)
    console.log(Header);
    next();
  }
  const [err, setErr] = useState('')


  /*   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
   */
  /*   const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    }; */

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div style={{ padding: 16, margin: 'auto' }}>
      <GlobalHeader onSubmit={handleSubmit} back={back} title="Services" />

      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 Services
      </Typography>
      <Form
        onSubmit={handleSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={2}>
                  <TextField
                    id="outlined-uncontrolled"
                    label="MR#"
                    defaultValue="0"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Token No"
                    component={TextField}
                    type="text"
                    label="Token No"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    name="Gender"
                    component={Select}
                    label="Gender"
                    variant="outlined"
                    formControlProps={{ fullWidth: true }}
                    value={Header.Gender}
                    onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
                  >
                    <MenuItem value="male">male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="Budapest">
                      other
                    </MenuItem>
                  </Field>
                </Grid>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around" item xs={3}>

                    <KeyboardDatePicker
                      disableToolbar
                      variant="outlined"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"

                      label="WelfareDate"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>

                <Grid item xs={3}>
                  <Field
                    fullWidth
                    name="WARD"
                    component={Select}
                    label="Ward"
                    variant="outlined"
                    formControlProps={{ fullWidth: true }}
                    value={Header.Gender}
                    onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
                  >
                    <MenuItem value="1">shift1</MenuItem>
                    <MenuItem value="2">shift2</MenuItem>
                    <MenuItem value="3">
                      shift3
                    </MenuItem>
                  </Field>
                </Grid>

                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Amount"
                    component={TextField}
                    type="text"
                    label="Amount"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="TotalAmount"
                    component={TextField}
                    type="text"
                    label="Total Amount"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="Patient Contribution"
                    component={TextField}
                    type="text"
                    label="Patient Contribution"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="Remark"
                    component={TextField}
                    type="text"
                    label="Remark"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <h4>Details</h4>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: "inline" }}><h4>TABLE BANYGA AB</h4></div>
                </Grid>


                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}