#

React

What is CDN? why we use CDN?
What is cross origin in CDN Links?
Secret internals do not use or you will be fired What is this in React JS?
Note: When you are an element in React, by using create React method, it will give an Object, not only the React Element.
When you are creating a new App, and you want to push the code to Git hub we need to follow these steps:

1. Git init
2. Git branch -M main
3. Git add .
4. Git commit -m “comment”
5. Git remote add origin “//….”
6. Git push origin main
   When we want to create large scale Applications, we want to configure these all (npm):
   Note: When we are creating app by using npx create-react-app app-name this will give complete configuration setup.
   NPM configuring steps:
7. Npm init
8. After that it’s ask you for a package name (keep as it is)
9. After that its asking version (keep as it is)
10. After that it will ask description (your wish)
11. After that it will ask you entry point (keep as it is now)
12. After that it will ask you test command jest
13. After that it’s shows git hub repository
14. After that it will ask you keywords (your wish Ex: react, namaste react, daram)
15. After that it will ask you Author Name (your wish Ex: Daram Guru)
16. After that it will ask you license ISC (ISC is fine go to next step)
17. When you enter after ISC, it will ask yes, enter YES
    Note: After completion of these all steps one new file will be generated, that’s file name is package.json, this package.json file is the configuration for npm.
     After completion of these steps, we need to install dependency packages. To install packages, we have to use this below command.
     Npm install -D parcel (parcel is the one of the best bundlers like webpack, vite etc…)

Note: There are two types of packages (or dependencies) we have

1. Dev Dependencies
2. Normal Dependencies
   Note: npx command is used to executes the files in localhost server.

What Parcel exactly does?
The Parcel will do the things:

1. Parcel will be creating a Dev build for us
2. Parcel will be creating a Local Server For us, it hosts our app in to the server
3. Parcel automatically Refresh the Page also
4. HMR = Hot Module Replacement
5. How the parcel will Refresh our page is, the Parcel will use the File Watching Algorithms – This has Written in C++
6. Caching – For Faster Builds
7. Parcel Will do Image Optimization
8. Parcel will do Minification of Our file also
9. Parcel will bundle all the files also for us
10. Parcel will also Compress your files
11. Parcel Will do Consistent Hashing
    What is Consistent Hashing? – Need to Research about this
12. Parcel will do Code Splitting for us
13. Parcel will also do Differential Bundling – For this Differential Bundling it will support Older Browsers also
14. Diagnostic (The error won’t show in the UI, it will show in the console)
15. Parcel will also do Error Handling
16. HTTPS
17. Tree Shaking – It will remove unused code
18. Different Build for Dev and Production bundles
    Note: When you are doing production, you have to remove “main” : “App.js” this line code from package.json file, if you are not removed it will throw an Error

Note: When we want to start our project, we need to run these npx parcel index.html command every time, every time need to run this command means it will take some time, so to resolve this issue, we can write scripts for this.
We need to open our package. Json and write scripts in scripts,
 Like - “start”: “parcel index.html” --- this is for host our project in the server
 “build”: “parcel build index.html” --- this is for production ready

What is React Element Exactly?
When we are creating elements in React that all are not elements, that all are Objects, when we render this element (Object) on to DOM it becomes an HTML element.

What is JSX?
Note: JSX is not HTML in JavaScript, JSX is HTML or XML like syntax.
Note: JSX Trans piled before it Reaches the JavaScript Engine
JSX Transformation:
JSX => React.createElement() => React Element – JS Object => HTML Element(render)

Babel: Babel is the JavaScript Compiler,
React Extensions in Visual Studio Code, need to install these all, to code look good:

1. Prettier – Code formatter (Author - Prettier)
2. Bracket Pair Colorization Toggler (Author – Dzhavat Ushev)
3. ES Lint - (Author - Microsoft)
4. Better Comments – (Author – Aaron Bond)

React Components:
We have two types of Components in React:

1. Class Based Components – OLD Way – Class Based components uses JavaScript Classes
2. Functional Component – NEW Way – Functional Components uses JavaScript Functions
   Functional Components: Functional Components are basically a normal JavaScript function. Why, we are calling as a Component means The Functional Component It Returns a JXS code or React element is known as Functional Component.
   What is Component Composition: If we are inserting one component to another Component its known as Component Composition.
   Or If you are Composing one Component to another Component is known as Component Composition.

When you start implementing any app, we have to do planning:
Component Structure Planning:
We Have total Three Main Parts of Components:

1. Header
   • Logo
   • Nav Items
2. Body
   • Search
   • Restaurant Container
   Restaurant Card
3. Footer
   • Copyright
   • Links
   • Address
   • Conatct
   What is Config Driven UI: The data will come from backend based on different locations(Like from Bangalore, and Chennai etc…), in that time the UI will change accordingly based on data,
   Ex: In Bangalore the Swiggy app will show different data, and the same swiggy UI will show in Chennai is different, because of the backend data. This is known as CONFIG DRIVEN UI.

Exports & Imports in React:
Generally, we have two types of exports:

1. Named Export and
2. Default Export
   Named Export: The Named Export is like, we are giving the name in front of variables and functions, this is known as Named Export.

Default Export: The Default Export will be like, we can export only one Component of one variable, we cannot export multiple components and multiple variables in single file or (module).
Imports in React: When we are importing the default exports and named exports is, the small difference.
 When we are importing the named exports in file is, we need to write a component, variable names in CURLEY BRACES, why because, the named exports are multiple in a single file.

 When we importing the default exports in file, we can write name directly, no need to use CURLEY BRACES, why because the named exports are the only one Component, Variable in a same file.
React Hooks:
 Generally, React Hooks are the Normal JavaScript Functions,
 It has given by the React, the all React Hooks are pre build functions in React.
 These all React Hooks, comes with super powers, this all React Hooks has logic return behind the scenes inside React.
 These all are utility functions which is given by React.

There are two most important Hooks in React:

1. useState()
2. useEffect ()
   Note: When ever the state will update the component will be re-rendered. And the UI will be updated when the state has updated.

React Algorithm:
Note: React is using Reconciliation Algorithm. This Reconciliation Algorithm also known as React Fiber.

What is Virtual DOM: Virtual DOM Representation of Actual DOM.

What is React Fiber: React Fiber introduced from React 16 Versioan.

What is Monolith and Micro Service Architecture:
Monolith Service Architecture:
Generally, in software development we have multiple teams should work on a single project.
The types of Teams writing code Like,

1. API Code
2. UI Team (Front End) Code
3. Authentication Code
4. Data Base (DB) Connectivity Code
5. Sending SMS Code
   The Entire Code was written in one Project, so it will take time to load the project and the implementation also slow because these entire code wants to run means it will take time.
   Note: To avoid this scenario the world moves to Micros Service Architecture.

What are Micro Services:
In Microservices the code should written in different projects, like
 The API code should be written in different project and,
 The UI Code should be written in different project
 Authentication code also
 Data Base also
 SMS Sending also different project
 Email Sending Notification also
Note: This process known as separation of concerns and single response principle.
Note: Each service as its own job, no one should be interfear.

The API data fetch two ways in Front End:

1.  First Page Load  Make API Call (It will take time to load the data (500ms))  Render the UI
2.  Second Approach is – After Page Loads First Render the UI  Call API  Then Re-Render the UI with API data
    Note: In React Every one follows the 2nd Approach to fetch the Data and Show the Data in UI. This approach will give a better user experience (UX).

Note: React Render cycles are very fast.

Note: All Hooks are like just normal JavaScript functions, and these all hooks from React, Every Hook has specific use case. So that’s the reason React Hooks are popular.

What is CORS Policy?
What is Optional Chaining in JavaScript?

Note: Before Loading the API, we can show shimmer UI pattern.
What is Conditional Rendering: Conditional Rendering means when the page rendering on Condition based, like before fetching the data from API we can shows in the UI was shimmer UI like that,
Note: This is known as Conditional Rendering.

Use State: use State is a React Hook; it is used to update the state.
Explanation of use State:
 When we are calling this use state function with initial value, use state will give two parameters, one is initial value assigned variable and call back function.
 When we are calling the 2nd parameter (call back function) the initial value of variable gets updated and re-render the component in the UI.
Note: Whenever state variables update, react triggers a re-conciliation cycle (re-renders the Component and update the UI).

Note: JSON Viewer is the plugin of Chrome extension, this extension is used to see the API data in JSON format.

Tricks to give Responsive Layout By using HTML, CSS:
 We can give the value of element is 1em like 1em
Ex: padding: 0 1em
 Instead of giving width: 600px, we can use max-width: 60rem, this will give us good responsive of our application.
Note: If we are giving
height:300px; instead of this we can use min-height:300px like this, it will give good responsive, it won’t over flow of particular place.
display: grid;
place-items: center;  this will give us centre of our application like, up and bottom, right and left we can the content in the centre of our element particular space.

Media Queries for added complexity:
Ex:
@media (min-width: 40em) {
. split{
Display: flex;
Gap: 2em;
}
}

About Font Size: If we want to give exact size, when your application is in different screen sizes, like laptop screen and desktop screen and mobile screen which ever screen we have it will fit perfectly by using below CSS syntax.
Ex: h1 {
Font-size: clamp (2rem, 1rem + 10vw, 5rem)
}

React Folder Structure:

1. Src - all source folders are in src folder
2. Components – All Components folders and files are inside Components folder
3. Utils – All the utility files are store in this folder – inside this folder constants.js file.

React Hooks: React Hooks are the just normal JavaScript functions, which is given by React with super powers, these all hooks are pre build in react.
Note: React Hooks are implemented by Facebook developers.
Most Commonly used Hooks in React is,

1. useState Hook
2. useEffect Hook
   useState Hook: use State Hook is to create state variables. That is why the name is use state.
   Note: Why is it called state variable means it maintain state of our Component.
   Note: When ever a state variable gets updated React re-renders the component, once the component re-renders the UI will be updated with changes.
   Note: use State using array destructuring. When we are calling use state method in react this will give us an array, inside this array we have two parameters.
3. One is like state variable and
4. Second one is a function
    Why these two parameters are first parameter is to store initial value of state variable and the second parameter (state update function) is update the state variable value in the DOM.
   Note: Never write use State hook out side of function, why because it will throw an error.
   Note: Never use useSate hook inside the if, else statements. Why because this will create inconsistency in our code.
   Note: Never create use State hook inside for loop.
   Note: Don’t do use the use Effect hook inside functions, why because the state variable is to be created inside the Functional Component or the higher level.
   Note:
    Always write use State hooks inside the function, and
    Always write this function at the top of function. On the top means when the function starts there only, we try to use this use State hook. So that we don’t have a lot of inconsistency our code.
    Why, this scenario is JavaScript is a Synchronous Single Threaded Language, the code will execute line by line.
   React Reconciliation: React uses the Reconciliation Algorithm and React has React Fiber also. React reconciliation is the process
   Virtual DOM: Virtual DOM is the representation of Actual DOM, actual DOM like tags only (like <div> inside <div> like that).
   Diff Algorithm: Diff algorithm will find the difference between previous virtual DOM and present virtual DOM and push to the UI updated virtual DOM.

Use Effect: use Effect will be called every time my component renders my use Effect will be called.
Note: If no dependency array the use Effect is called on every render.
Note: If the dependency array is empty (or dependency array present) use Effect is called on initial render (Just Once) when the component render for the first time.
Note: If the dependency array has some value, then use Effect is called every time when the dependency array value updated.

React Router DOM: React Router DOM is a React Library; it’s helps us to route our Components in our Project.
Create Browser Router: Create Browser Router is a Pre build component inside React Router DOM library, Create Browser Router is used to Configure the Components, which Component will load the path.
Router Provider: Router Provider is also Pre-Build Component inside React Router DOM, this will help us our Router Configurations will render in the browser based on Router Path, which ever we have given the path in the CONFIGURATION.

Use Route Error: use Route Error is the hook, which is provided by the React Router DOM for Showing Error information on the Error Browser Page.

Outlet: Outlet is a Component which is provided by React Router DOM, outlet is kind of like a tunnel.
Note: What the Outlet will do exactly means, what ever the Path we are provided, based on that path each children Components will be filled in to that parent component and it’s render in to the browser.
Note: All the Childrens according to the routes go inside.

Link: Link is a Component which is provided by the React Router DOM library. The Link component will work same as like anchor tag, the main difference is, if we are using anchor tag, the particular path entire page will render,
If we are using Link component which is provided by the react router DOM, it won’t render the entire page it will render only the particular component, which is provided in the path.
