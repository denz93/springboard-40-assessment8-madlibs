### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  `React` is a web front-end framework. It simplifies DOM manipulating by JSX, components concept makes the app easier to envole and maintain. It looses the tight relationship between backend and frontend. 

- What is Babel?

  Babel is a web building tool. Its main purpose is transforming the code to run on as much browsers as possible.

- What is JSX?

  JSX is a Javascript Extension which uses XML-like syntax to create DOM tree

- How is a Component created in React?

  Component likes a regular function in React except it must returns a JSX element

- What are some difference between state and props?

  State lives inside a component and only consume by the component that create it.

  While Component Props is like parameters of a function that allows other components to pass arguments into it.

- What does "downward data flow" refer to in React?

  It means the global data need to be passed deeply down into multiple compnonents in the hierachy

- What is a controlled component?

  `A controlled component` is a component that uses React state to handle/extract data from HTMLForm inputs

- What is an uncontrolled component?

  `An uncontrolled component` is a component that directly interact with DOM via useRef to handle/extract data from HTMLForm inputs

- What is the purpose of the `key` prop when rendering a list of components?

  To help React distinguishes any changes/updates to the list so that when there is a change to the array, React can render only the change effectively

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  It could lead to miss represent information in case the array being reordered. 

- Describe useEffect.  What use cases is it used for in React components?

  `useEffect` is used to run side effects (tasks) as neccessary. For example, fetching user profile when DOM loaded, watching if the user scroll the scrollbar, run a periodic task every 1 minutes, etc

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

  `useRef` is used to create a state that does not trigger React rerender when there is a change to it. Used to create a reference to DOM elements, create global state inside components

- When would you use a ref? When wouldn't you use one?

  Use `ref` when we want to have a DOM reference to an element. 

- What is a custom hook in React? When would you want to write one?

  Custom Hook is a React Hook that looks like a function. It could return some states like `useState()` and some helpers to allow making changes to that states.

  Some complex components have tremendous amount of states, and the way it's manipulate the states is not so obviously. So that is when we use CustomHook to abstract and extract those states and actions into a high-level simpler hook.

