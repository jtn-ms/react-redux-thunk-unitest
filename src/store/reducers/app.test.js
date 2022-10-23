import counterReducer from './app';

const initialState = {
    counter: 0,
};

const increment = {
    type: "INCREMENT",
    payload: 1
}

const decrement = {
    type: "DECREMENT",
    payload: 1
}

describe('counter', () => {
    it('Action Test - INCREMENT', () => {
        let nextState = initialState;
        for (let index = 1; index < 100; index++) {
            nextState = counterReducer(nextState, increment);
            const {counter} = nextState;
            expect(counter).toEqual(index);
        }
    });

    it('Action Test - DECREMENT', () => {
        let nextState = initialState;
        for (let index = 1; index < 100; index++) {
            nextState = counterReducer(nextState, decrement);
            const {counter} = nextState;
            expect(counter).toEqual(-index);
        }
    });
});