import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import './DateButtonGroup.css';

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const DateButtonGroup = (props) => {
  const { date } = props;
  const classes = useStyles();

  const handleClick = (range) => {
    const { onClick } = props;
    onClick(range);
  }

  const handleClickOneMonth = () => {
    handleClick('1m');
  };
  const handleClickTwoMonth = () => {
    handleClick('2m');
  };
  const handleClickThreeMonth = () => {
    handleClick('3m');
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          selected={date === "1m"}
          onClick={handleClickOneMonth}
        >
          1 month
        </Button>
        <Button
          selected={date === "2m"}
          onClick={handleClickTwoMonth}
        >
          2 months
        </Button>
        <Button
          selected={date === "3m"}
          onClick={handleClickThreeMonth}
        >
          3 months
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default DateButtonGroup;
