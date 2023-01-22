JSX - JavaScript XML
JSX - JS (webpack + babel)
 
`class`, `for` - Reserved keyword
 
1. `className`
1. `htmlFor`
 
## `function` to be considered as components
 
1. `function` name should start with a _capital_ letter
2. It should at least return one jsx element
 
## `{}` -> template syntax
 
1. Supports expression
 
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
 