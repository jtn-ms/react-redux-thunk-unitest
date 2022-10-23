import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Typography from '@mui/material/Typography';
import {
  ThemeProvider,
  createTheme,
  Stack,
  ButtonGroup,
  Button
} from '@mui/material';
import NumberInput from './components/NumberInput';


const theme = createTheme({
  // palette: {
  //   mode:"dark",
  // }
})

function App() {
  const [amount,setAmount] = useState(1);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.app);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
        <Typography variant="h1" color="primary">
          Counter
        </Typography>
        <Typography data-test-id="value" variant="h3" color="error"
          mt={10}
          >
          value: {counter.counter}
        </Typography>
        <Stack
          direction="row"
          mt={10} alignItems="center" spacing={1}
          >
          <NumberInput amount={amount} setAmount={setAmount}/>
          <ButtonGroup variant="contained" orientation="vertical" color="warning" aria-label="outlined button group">
            <Button id="increment" data-testid="btn-increment" onClick={()=>dispatch({type:"INCREMENT",payload:amount})}>Increment</Button>
            <Button data-testid="btn-decrement" onClick={()=>dispatch({type:"DECREMENT",payload:amount})}>Decrement</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
