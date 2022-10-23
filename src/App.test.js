import React from 'react';
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import App from './App';

import '@testing-library/jest-dom';
import * as redux from 'react-redux';

import configureStore from './store';
import {render, fireEvent, screen, cleanup} from '@testing-library/react';

// import sinon from 'sinon';
// import { createShallow, createMount } from '@mui/material/test-utils';
// import { mount, shallow,configure } from 'enzyme'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// configure({ adapter: new Adapter() });

// describe("log",()=>{
//   it('calls console.log with "hello"', () => {
//     const consoleSpy = jest.spyOn(console, 'log');
//     console.log('hello');
//     expect(consoleSpy).toHaveBeenCalledWith('hello');
//   });
// });

describe(App, () => {
  // describe("mockStore",()=>{
  //   const mockStore = configureMockStore([thunk]);

  //   let state = {
  //     app: {
  //       counter:0,
  //     }
  //   }

  //   const store = mockStore(()=>state);
  //   render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );

  //   // it('should be wrapped with <ThemeProvider>', () => {
  //   //   expect(wrapper.find('ThemeProvider').length).toEqual(2);
  //   // });
  //   it('initial value should be zero', () => {
  //     expect(store.getState().app.counter).toBe(0);
  //   });
  // });

  describe("realStore",()=>{

    beforeEach(() => {
    });

    afterEach(() => {
      cleanup();
    });

    describe("Button",()=>{

      test("incrementButton", () => {
        const store = configureStore();
        const wrapper = render(
          <Provider store={store}>
            <App />
          </Provider>
        );
        const incrementBtn = screen.getByTestId("btn-increment");
        // console.log(store.getState().app.counter);
        for (let index = 1; index < 100; index++) {
          fireEvent.click(incrementBtn);
          expect(store.getState().app.counter).toBe(index);
        }
      });

      test("decrementButton", () => {
        const store = configureStore();
        const wrapper = render(
          <Provider store={store}>
            <App />
          </Provider>
        );
        const decrementBtn = screen.getByTestId("btn-decrement");
        for (let index = 1; index < 100; index++) {
          fireEvent.click(decrementBtn);
          expect(store.getState().app.counter).toBe(-index);
        }
      });
    });

    describe("IconButton",()=>{
      test("incrementAmount", () => {
        const store = configureStore();
        const wrapper = render(
          <Provider store={store}>
            <App />
          </Provider>
        );
        const increaseIcon = screen.getByTestId(/number-input-increase/i);
        const valueInput = screen.getByLabelText(/number-input-value/i).querySelector('input');
        // console.log(valueInput.value);
        fireEvent.change(valueInput, {target: {value: '23'}});
        fireEvent.click(increaseIcon);
        expect(valueInput.value).toEqual('24');
        const incrementBtn = screen.getByTestId("btn-increment");
        let initial = store.getState().app.counter;
        fireEvent.click(incrementBtn);
        expect(store.getState().app.counter).toBe(initial+Number(valueInput.value));
        const decrementBtn = screen.getByTestId("btn-decrement");
        fireEvent.click(decrementBtn);
        expect(store.getState().app.counter).toBe(initial);
      });
    });
  });

});