import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import './CompanyInput.css';

const useStyles = makeStyles((theme) => ({
  textField: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}));

const CompanyInput = (props) => {
  const { value } = props;
  const classes = useStyles();

  const handleChange = (evt) => {
    const { onChange } = props;
    const comp = evt.target.value;
    onChange(comp);
  }

  return (
    <div className={classes.textField}>
      <TextField
        id="standard-basic"
        label="Standard" 
        required={true}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default CompanyInput;

