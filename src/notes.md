JSX - JavaScript XML
JSX - JS (webpack + babel)
 
`class`, `for` - Reserved keyword is required for JavaScript.
 
1. `className` is used to convert  JSX into JavaScript.
1. `htmlFor`
 
## `function` to be considered as components
 
1. `function` name should start with a _capital_ letter
2. It should at least return one jsx element
 
## `{}` -> template syntax
 
1. Supports expression
2. Assignable statements is an expression
3. Only needed in `return
## props -> arguments
 
1. `props` -> properties of the components
 
### Handy shortcuts
 
1. crtl + ` -> show / hide terminal
2. crtl + , -> settings | format on save
3. crtl + c -> stop react server in terminal
4. win + . -> emojis
 
### Run server
`npm run dev`

D - Don't
R - Repeat
Y - Yourself
 
 
### Hooks
 
1. React listens to changes made by hooks
2. Hooks - function
3. It starts with `use`
4. `useState`
   1. `const [state, setState] = useState(InitialValue)`
   2. state -> current | `state` -> current data
   3. `setState` updates the value of `state`
   4. `setState` react listens and updates `state` & view
   5. Flow: User clicks -> `onClick` trigger -> `setLike` -> React updates view
 
 ### Virtual DOM
 
- _Copy_ of the Real Dom
- Large `{key: value}`
- Updating it does not cost performance
- To access _VDOM_ you could use hooks (eg. `setState`)
- Once the update is done on the virtual DOM, then the Real dom is updated
- Comparison - _Reconciliation_ - VDOM & Real Dom
- Key helps is _quickly_ compare the _changes_
- Don't use `document.*` in React - Loses performance

### Agenda
- Materialized
- Imports & Exports

### Imports & Exports
1. Types
    1. named - imports & exports - prefered
      1. Multiple exxports
    2. default - imports & exports 
      1. Only one default export per file
2. Always put export at end of the file - good practice
3. ctrl + click - for easy navigation.        


### Tic Tac Toe
- Alternate | X -> O -> X | - ✅
- Board tracking - ✅
- Winning condition
  - When player play check in winning condition appears on the board - ✅
  - Announce winner - ✅
  - Stop the game
- Task
  - Restart
  - Player turn
  - X or O start
  - Draw condition
  - Style