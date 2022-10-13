# What is Class Component?

- React class based components are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS.
- The main feature of class-based components that distinguished them from functional components is that they have access to a state which dictates the current behavior and appearance of the component (Later, with React Hooks introduced in version 16.8, we are able to declare a stateful component without declaring a class). This state can be modified by calling the setState() function. One or more variables, arrays, or objects defined as part of the state can be modified at a time with the setState() function.
- Data is passed to other components with the help of props. Props work similarly for all components in ReactJS be they class based or functional. Props are always passed down from the parent component to the child component. ReactJS does not allow a component to modify its own props as a rule. The only way to modify the props is to change the props being passed from the parent component to the child component. This is generally done by passing a reference to a function in the parent component, which changes the props being passed to the child component.
- Class-based components have access to the lifecycle functions like componentWillMount(), componentDidMount(),componentWillReceiveProps(),componentWillUpdate(), shouldComponentUpdate(),render() and componentWillUnmount();. These lifecycle functions are called at different stages of the lifecycle and are used for a variety of purposes like changing the state or doing some work (like fetching data from an external API). They are also referred to as lifecycle hooks.

## Why Function components replaced class components?

- Class-based components are slightly slower than their functional counterparts. The difference is very small and is almost negligible for smaller web apps – though the performance difference increases when the number of components in the app increases. Moreover, class-based components involve a lot more coding on the programmer’s part, making them slightly more inefficient to use.

### If we are expecting features like

1. Managing State of the Components

2. Adding Life Cycle Methods to Components

3. Need to Write Logic for Event Handlers

- Then we will go for Class Component and in rest of the cases we can go for Function Component.

## Life Cycle Methods

1. Creation of the component (componentDidMount)
   - As the name already suggests, this method is run when the component is mounted, meaning when it is inserted in the DOM tree.

Common tasks that are done in this method are:

- Connect to web APIs or JavaScript frameworks
- Set Timers using setTimeout or setInterval
- Add event listeners

2. Render of the component (render)
   - We are already familiar with the render method in React, each class component needs to contain a render method, and it is fairly simple to understand. The render method contains all the logic your component should display on the screen. It might also contain a null value, if you don’t want to show anything.
3. (Optional) Update of the component (componentDidUpdate)
   - This method is not called for the initial render, but it is called any other time that the component updates. This means that this method is prone to infinite loops if used to update state in a way that would cause a re-render, and so it should include a conditional statement to prevent that. For example, it could compare the new props with the previous props to make sure some value changed.
   - This method is a great place to work and operate on the DOM when the component has updated. It is also useful to send network requests when specific conditions are met. For example, if a user changed accounts, we could now fetch the data for that new account during this lifecycle method.
4. Death of the component (componentWillUnmount)
   - This is the last lifecycle method, which will be called when the component is removed from the DOM tree. Usually you would do cleanup tasks in this method. This often includes cleaning up what you added in the componentDidMount method.

A few examples are:

- Remove event listeners
- Cancelling network requests
- Other cleanup routines
