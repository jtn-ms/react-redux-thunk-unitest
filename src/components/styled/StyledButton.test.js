import StyledButton from "./StyledButton";
import {render, fireEvent, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
});

afterEach(() => {
  cleanup();
});

describe(StyledButton, ()=>{
  describe("jest-dom",()=>{
    test("initial",()=>{
      const handleClick = jest.fn();
      const renderApp = () => render(<StyledButton title={"Push Me"} onClick={handleClick}/>);
      const { getByTestId,...wrapper } = renderApp();
      const button = getByTestId("button-styled");
      fireEvent.click(button);
      expect(button).toHaveTextContent("Push Me");
      expect(button).toBeEnabled();
      // expect(button).toBeDisabled();
    });
    test("Click", async ()=>{
      const handleClick = jest.fn();
      const renderApp = () => render(<StyledButton title={"Push Me"} onClick={handleClick}/>);
      const { getByTestId,...wrapper } = renderApp();
      const button = getByTestId("button-styled");
      await userEvent.click(button);
      // expect(handleClick).toHaveBeenCalled();
      // expect(handleClick).toHaveBeenCalledTimes(0);
    });
  });
});

// describe("testing-library/react", ()=>{
//   beforeEach(() => {
//   });

//   afterEach(() => {
//     cleanup();
//   });

//   describe("refresh",  ()=>{
//     const handleClick = jest.fn();
//     let {container} = render(<StyledButton title={"Push Me"} onClick={handleClick}/>);
//     test("prop should be updated", async ()=>{
//       expect(await screen.findAllByText(/push me/i)).toHaveLength(1);
//       expect(screen.getByText(/push me/i)).toHaveTextContent("Push Me");
//       expect(screen.getByTestId("button-styled")).toHaveTextContent("Push Me");

//       render(<StyledButton title={"Click Me"} onClick={handleClick}/>, {container});
//       const button = screen.getByText(/click me/i);
//       // const button = screen.getByTestId("button-styled");
//       expect(button).not.toBeNull();

//     })
//   });
// });