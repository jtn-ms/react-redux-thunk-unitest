import NumberInput  from './NumberInput';
import * as React from 'react';
import {render, fireEvent, screen, cleanup} from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

describe(NumberInput, ()=>{

  beforeEach(() => {
  });

  afterEach(() => {
    cleanup();
  });

  it("app displays correct initial value",()=>{
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    render(<NumberInput amount={1} setAmount={setState} />);
    const increaseIcon = screen.getByTestId(/number-input-increase/i);

    // It turns out that this type of error prints found component beautifully as html format.
    // Better than console.log
    // very helpful for debugging
    // const increaseIcon = screen.getByText(/number-input-increase/i);

    fireEvent.click(increaseIcon)
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalled();
    expect(screen.getByDisplayValue('1')).toHaveValue("1");
  });
});