import '@testing-library/jest-dom';
import configureStore from '.';


describe("store", () => {
  it("should set the root reducer", () => {
    const dispatch  = jest.fn();

    const store = configureStore();

    for (let index = 1; index < 100; index++) {
      store.dispatch({
        type: "INCREMENT",
        payload:1,
      });
      // console.log(store.getState().app.counter);
      expect(store.getState().app.counter).toBe(index);
    }

  });
});

