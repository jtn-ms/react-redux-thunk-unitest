## [react-template](https://www.youtube.com/watch?v=JBSUgDxICg8)
```
npx create-react-app javascript-redux --template javascript-redux
npm i react-redux connected-react-router redux redux-devtools-extension history redux-thunk redux-actions
npm i @mui/material @mui/icons-material
npm i @emotion/react @emotion/styled
npm i prop-types react-number-format
```
#### testing
```
npm i -D @testing-library/react@12.0 @testing-library/jest-dom
npm i -D enzyme sinon
npm i --save-dev redux-mock-store
npm i -D @wojtekmaj/enzyme-adapter-react-17
npm i --save-dev @testing-library/user-event @testing-library/dom
```
#### Testing List
* [ ] component
* [ ] component with state
* [ ] component with state and props
* [ ] component with redux-thunk
* [x] redux-thunk actions `npm test -- -t "counter"` or `npm test src/store/reducers/add.test.js`
* [ ] redux-thunk real store
* [ ] redux-thunk mock store
* [ ] redux-toolkit
* [ ] rxjs
* [x] console.log with enzyme working with `npm test -- -t <regex>`

#### Report
- Not working

component|method|expect
-|-|-
**muiButton**|-|
jest|toHaveBeenCalled|always return false
testing-library|toHaveBeenCalledTimes|always return 0
enzyme|find|returns 5 nodes for a single `data-testid` for <Button> while it return 1 for classic button - `<button>`
#### Ref

* [x] https://stackoverflow.com/questions/64658031/which-enzyme-adapter-works-with-react-17
* [x] https://redux.js.org/usage/writing-tests
```
import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
```
* [x] https://stackoverflow.com/questions/39575200/how-to-unit-test-this-redux-thunk
* [ ] https://stackoverflow.com/questions/56827300/how-to-test-a-component-using-react-redux-hooks
* [ ] https://stackoverflow.com/questions/64165138/how-to-mock-spy-usestate-hook-in-jest
* [ ] https://stackoverflow.com/questions/50916374/material-ui-enzyme-testing-component
* [ ] https://mui.com/material-ui/guides/testing/
* [x] [enzyme vs. testing library](https://testing-library.com/docs/react-testing-library/migrate-from-enzyme)
* [ ] [setupTests.js](https://create-react-app.dev/docs/running-tests/#initializing-test-environment)
#### TakeAway
- `enzyme` sucks. Instead, use `testing-library`
- `enzyme` doesn't support react 17+, mui well
- `npm test -- -t <regex>` works well with `console.log`
- components defined as just `export`, not `export default`, produces rendering issue in test with testing-library & jest
- mockStore and realStore can't be used together.
