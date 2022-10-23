import { forwardRef } from "react";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Divider, FilledInput, FormControl, InputAdornment, InputLabel, Stack } from "@mui/material";

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      allowLeadingZeros={false}
      // prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const iconStyle = {
  cursor: "pointer",
  "&:hover":{
    color: "skyblue",
  },
  "&:active":{
    transition: "scale(0.98)"
  },
}

const NumberInput = ({amount,setAmount}) => {
  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password">Amount</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type="text"
        value={amount}
        name="numberformat"
        onChange={e=>setAmount(e.target.value)}
        aria-label="number-input-value"
        endAdornment={
          <InputAdornment position="end">
            <Stack>
              <KeyboardArrowUpIcon data-testid="number-input-increase" sx={iconStyle} onClick={e=>setAmount(amount*1+1)}/>
              <Divider edge="end"/>
              <KeyboardArrowDownIcon data-testid="number-input-decrease"  sx={iconStyle} onClick={e=>setAmount(amount*1-1)}/>
            </Stack>
          </InputAdornment>
        }
        inputComponent={NumberFormatCustom}
      />
    </FormControl>
  );
}

export default NumberInput;