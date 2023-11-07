#  Q-1  What is React?
## ans :  React is a JavaScript library for building user interfaces. It is a JavaScript library that's your best friend when it comes to building cool user interfaces (UIs) for web applications. It's a creation of Facebook and is loved by developers for making UI building a breeze. It lets you create reusable UI components and manage how data is displayed and updated on web pages .
------
# Q-2 Who made React?
## ans : React was created by 'Jordan Walke', a software engineer at Meta, who released an early prototype of React called "FaxJS". He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. [citation needed] It was open-sourced at JSConf US in May 2013.
-----
# Q-3 What is Babel?
## ans : Babel is Google Translate but for code. It takes in JSX and spits out something browsers understand. Just include the Babel standalone script and set your script type to text/babel.
----
# Q-4 How does Babel convert html code in React into valid code?
## ans : When it comes to converting HTML code in React into valid code, Babel doesn't specifically handle that. Babel is a JavaScript compiler that helps transform modern JavaScript code into a format that is compatible with older browsers. However write JSX code in React, Babel does have a preset called "@babel/preset-react" that allows to write JSX syntax and converts it into regular JavaScript code that browsers can understand. So, it's not directly related to HTML, but rather JSX. 
----
# Q-5 What is ReactDOM used for? Write an example?
## ReactDOM is like a bridge between React elements and actual DOM elements. Its job is to take the React elements and turn them into real DOM elements that get rendered on the page.
### ` Example : const reactRoot = ReactDOM.createRoot(rootElement)
 ### reactRoot.render(element)`

----
---
# Q-6 What are the packages that you need to import for react to work with?
## ans : React Package : https://www.unpkg.com/react@18.2.0/umd/react.development.js
## React DOM Package : https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js
##  babel : https://unpkg.com/babel-standalone@6/babel.min.js
---
# Q-7 How do you add react to a web application?
## ans : First, you'll need to have Node.js installed on your computer. Once that's done, open your project folder in the terminal and run the command "npx create-react-app my-app" (replace "my-app" with the name of your project). This will set up a new React project with all the necessary files and dependencies. After that, you can start coding your React components in the "src" folder. To see your React app in action, run "npm start" in the terminal. And voila, you've added React to your web app.
---
# Q-8 What is React.createElement?
## React's createElement is a function used to create React elements, which are the building blocks of React applications. It allows you to create virtual representations of HTML elements or custom components. The createElement function takes three arguments: the type of the element (such as a string for HTML elements or a custom component), optional props or attributes for the element, and any children elements. It returns a React element that can be rendered to the DOM. It's commonly used in JSX syntax to create and render components.
---
# Q-9 What are the three properties that createElement accept?
## ans : When using createElement in React, it accepts three properties: the element type, the element's properties or attributes (also known as props), and the element's children. These properties help define the structure and behavior of the created element. The element type can be a string representing an HTML tag, or a custom component. The properties or attributes are optional and can include things like class names, event handlers, or custom data. Lastly, the children are the nested elements or text content within the created element. 
---
# Q-10 What is the meaning of render and root?
## ans : In the context of web development and React, "render" refers to the process of rendering or displaying components on the screen. When we render a component, we are instructing React to take that component and its children and convert them into a representation that can be rendered to the DOM (Document Object Model). This allows the component and its content to be visible and interactive on the web page.
## The "root" typically refers to the root or top-level element in the HTML structure of a web page. It serves as the entry point for React to inject its components and render them. In a React application, you will often see a div element with an id of "root" in the HTML file. This is where React will render the main component of your application and its child components.
## So, in summary, "render" is the process of displaying components on the screen, and the "root" is the top-level element where React injects and renders the components.
