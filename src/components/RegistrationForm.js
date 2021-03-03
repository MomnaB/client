import React, { useState } from "react";
import Header from './Header'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import RadioGroup from "@material-ui/core/RadioGroup";

const RegistrationForm = () => {
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [state, setState] = React.useState({
    gender: "",
    name: "gender",
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },

    divider: {
      margin: theme.spacing(1, 0),
    },
  }));

  const classes = useStyles();
function RegistrationForm ({handleNext, handleBack}) {
  return (
    <div>
     <Header handleNext={handleNext} handleBack={handleBack}/>
            <h3>form here</h3>

      <Typography variant="subtitle1" gutterBottom>
        Registration Form:
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              id="outlined-Number"
              label="Your MR #"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              required
              id="outlined-Number"
              type="number"
              label="Token ID"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="date"
              label="Registration date"
              type="date"
              defaultValue="2020-07-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              id="outlined-text"
              label="Name"
              defaultValue="Name"
              variant="outlined"
            />
          </Grid>
        </Grid>
        {/* //==================================================================================== */}
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              id="outlined-text"
              label="Father Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue=""
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              id="outlined-number"
              type="number"
              label="Age"
              defaultValue="Age"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={3}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Gender
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Gender"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option>Female</option>
                <option>Male</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/* //========================================================================= */}
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              id="outlined-text"
              label="Your Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={3}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender1"
                // value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="(Disabled option)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              id="outlined-text"
              label="CNIC"
              defaultValue=" CNIC"
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* //===========================second portion=========================== */}
        {/* 
    <fieldset legend="Contact" >
    </fieldset>
    
    
     */}
        <fieldset>
          <legend>Contact</legend>

          <Grid container spacing={2}>
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* ---------------------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* ---------------------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* -------------------------------------------------------- */}
          </Grid>
        </fieldset>
        {/* //========================================third portion=================================== */}

        <fieldset>
          <legend>Reffer Info</legend>

          <Grid container spacing={2}>
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* ---------------------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </fieldset>
        {/* //==========================================forth portion=================================== */}

        <fieldset>
          <legend>Staff</legend>

          <Grid container spacing={2}>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="End"
                  labelPlacement="Is PAF Empolyee"
                />
              </FormGroup>
            </Grid>
            {/* -------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
            {/* ---------------------------------------------------------------------- */}
            <Grid item sm={12} md={4} lg={3}>
              <TextField
                id="outlined-basic"
                label="M.R.#"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </fieldset>
      </form>
    </div>
  );
};
}
export default RegistrationForm;