import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="Job-details-banner">
        <h1>Blog</h1>
      </div>
      <div className="question-answer-component">
        <h1>Questions and Answers</h1>
        <div className="question-answer">
          <h3>1. When should you use context API ?</h3>
          <p>
            Using React's Context API can be great for situations when you need
            to pass data down through multiple components or provide global data
            to multiple components without having to pass it as props. It can
            also be useful for avoiding prop-drilling, managing state or
            application settings, or providing a theme or style to an entire
            application. But be aware that if you use it too much, it can lead
            to performance issues because every component will re-render when
            the context data changes. So it's best to use it carefully and only
            when it really makes sense.
          </p>

          <h3>2. What is a custom hook ?</h3>
          <p>
            Custom hooks are a great way to save time and
            keep code clean. A custom hook is like a regular JavaScript function
            that starts with "use" and lets you reuse stateful logic between
            components without having to write the same code over again. They're
            even able to use built-in hooks like useState and useEffect to do
            their work. The best part is
            that custom hooks can be shared between components and projects,
            since they're just regular functions that can be imported and used
            like any other function. This makes it easy to keep your components
            organized by removing redundant code and making them easier to read
            and maintain.
          </p>

          <h3>3. What is useRef ?</h3>

          <p>
            The useRef hook in React is great for holding onto a DOM element or
            variable that will keep its value between renders. It gives back an
            object with a 'current' property, which can be set to any value.
            It's like the createRef method in class components, but it can be
            used in functional components, and the value won't change even if
            the component re-renders.
          </p>

          <h3>4. What is useMemo ?</h3>
          <p>
            React's useMemo hook helps to optimize computationally expensive
            calculations by saving the result of a function and caching it. It
            takes two arguments: the function that returns a value and an array
            of dependencies. If any of the dependencies change, the hook will
            recalculate the value, otherwise it will use the cached version.
            This can be useful to avoid having to do the same calculation over
            and over again, improving performance by caching the result of the
            calculation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
