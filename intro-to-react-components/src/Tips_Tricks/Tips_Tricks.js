// React Tips & Tricks for Beginers to Experts
// --> KISS - Keep It Simple Stupid - Less code less bugs

import React, { memo, useCallback, useMemo, useState } from "react";
import { useImmer, useImmerReducer } from "use-immer";

// 1. When setting default values for props, do it while destructuring them
function Button({
  onClick,
  text = "Click here",
  small = false,
  colorScheme = "light",
}) {
  return (
    <button
      onClick={onClick}
      style={{
        color: colorScheme === "dark" ? "white" : "black",
        fontSize: small ? "12px" : "16px",
      }}
    >
      {text}
    </button>
  );
}

//   2. Drop curly braces when passing string type props.
const Component1 = () => {
  return (
    <>
      {/* ❌ Bad: curly braces are not needed */}
      <Button text={"Click me"} colorScheme={"dark"} />

      {/* // ✅ Good */}
      <Button text="Click me" colorScheme="dark" />
    </>
  );
};

// 3. Ensure that value is a boolean before using value && <Component {...props}/> to prevent displaying unexpected values on the screen.
const Component2 = ({ items }) => {
  return (
    <div className="list">
      {/* {items.length && ( // When the list is empty, 0 will be printed on the screen. */}
      {items.length > 0 && ( // Nothing will be printed on the screen when there are no items.
        <div>
          {items.map((item) => {
            return <div key={item.id}>{item}</div>;
          })}
        </div>
      )}
    </div>
  );
};

// 4. Move data that doesn't rely on the component props/state outside of it for cleaner (and more efficient) code
const OPTIONS = ["Maths", "Literature", "History"];

function CoursesSelector() {
  return (
    <select>
      {OPTIONS.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}
// 5. If you're frequently checking a prop's value before doing something, introduce a new component
// We introduce a new component, UserPosts, that takes a defined user and is much cleaner.
function Posts({ user }) {
  if (user == null) {
    return null;
  }

  return <UserPosts user={user} />;
}

function UserPosts({ user }) {
  // Temp code
  const getUserPosts = (id) => {
    return id;
  };
  const posts = useMemo(() => getUserPosts(user.id), [user.id]);

  const handlePostSelect = useCallback(
    (postId) => {
      // TODO: Do something
    },
    [user]
  );

  return (
    <div>
      {posts.map((post) => (
        <button key={post.id} onClick={() => handlePostSelect(post.id)}>
          {post.title}
        </button>
      ))}
    </div>
  );
}

// 6. Use the CSS :empty pseudo-class to hide elements with no children

// 7. All state and context are grouped at the top, making it easy to spot.

// 8. Use functions (inline or not) to avoid polluting your scope with intermediate variables
// The variables gradeSum and gradeCountare scoped within computeAverageGrade function.
function Grade({ grades }) {
  if (grades.length === 0) {
    return <>No grades available.</>;
  }

  // Bad
  // let gradeSum = 0;
  // let gradeCount = 0;

  // grades.forEach((grade) => {
  //   gradeCount++;
  //   gradeSum += grade;
  // });

  // const averageGrade = gradeSum / gradeCount;

  // Good
  const computeAverageGrade = () => {
    let gradeSum = 0;
    let gradeCount = 0;
    grades.forEach((grade) => {
      gradeCount++;
      gradeSum += grade;
    });
    return gradeSum / gradeCount;
  };

  return <>Average Grade: {computeAverageGrade()}</>;
}

//9. Leverage the children props for cleaner code (and performance benefits)

//10. We focus on the input as soon as it is available.
function InputComponent() {
  const ref = useCallback((inputNode) => {
    inputNode?.focus();
  }, []);

  return <input ref={ref} type="text" />;
}

// 11. Prefer named exports over default exports
/// Default export
// import Dashboard from "/path/to/Dashboard"

/// Named export
// import { Dashboard1 } from "/path/to/Dashboard"

// 12. Never create a state for a value that can be derived from other state or props
// More state = more trouble --- Every piece of state can trigger a re-render and make resetting the state a hassle.

// 13. Keep the state at the lowest level necessary to minimize re-renders
// Whenever the state changes inside a component, React re-renders the component and all its children (there is an exception with children wrapped in memo).
// This happens even if those children don't use the changed state. To minimize re-renders, move the state down the component tree as far as possible.
// BAD --  When sortOrder changes, both LeftSidebar and RightSidebar re-render.
function AppOne() {
  const [sortOrder, setSortOrder] = useState("popular");
  return (
    <div className="App">
      {/* <LeftSidebar /> */}
      <MainOne sortOrder={sortOrder} setSortOrder={setSortOrder} />
      {/* <RightSidebar /> */}
    </div>
  );
}

function MainOne({ sortOrder, setSortOrder }) {
  return (
    <div>
      <Button
        onClick={() => setSortOrder("popular")}
        active={sortOrder === "popular"}
      >
        Popular
      </Button>
      <Button
        onClick={() => setSortOrder("latest")}
        active={sortOrder === "latest"}
      >
        Latest
      </Button>
    </div>
  );
}

// GOOD -- sortOrder change will only affect Main.
function AppTwo() {
  return (
    <div className="App">
      {/* <LeftSidebar /> */}
      <MainTwo />
      {/* <RightSidebar /> */}
    </div>
  );
}

function MainTwo() {
  const [sortOrder, setSortOrder] = useState("popular");
  return (
    <div>
      <Button
        onClick={() => setSortOrder("popular")}
        active={sortOrder === "popular"}
      >
        Popular
      </Button>
      <Button
        onClick={() => setSortOrder("latest")}
        active={sortOrder === "latest"}
      >
        Latest
      </Button>
    </div>
  );
}

// 14. Clarify the distinction between the initial state and the current state
// Good: Naming is clear about what is the initial state and what is current.
function Main({ initialSortOrder }) {
  const [sortOrder, setSortOrder] = useState(initialSortOrder);
  return (
    <div>
      <Button
        onClick={() => setSortOrder("popular")}
        active={sortOrder === "popular"}
      >
        Popular
      </Button>
      <Button
        onClick={() => setSortOrder("latest")}
        active={sortOrder === "latest"}
      >
        Latest
      </Button>
    </div>
  );
}

// 15. Update the state based on the previous state, especially when memoizing with useCallback
// BAD -- handleAddTodo and handleRemoveTodo change whenever todos changes.
function UpdateOne() {
  const [todos, setToDos] = useState([]);
  const handleAddTodo = useCallback(
    (todo) => {
      setToDos([...todos, todo]);
    },
    [todos]
  );

  const handleRemoveTodo = useCallback(
    (id) => {
      setToDos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div className="App">
      {/* <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} /> */}
    </div>
  );
}

// GOOD -- handleAddTodo and handleRemoveTodo change whenever todos changes.
function UpdateTwo() {
  const [todos, setToDos] = useState([]);

  const handleAddTodo = useCallback((todo) => {
    setToDos((prevTodos) => [...prevTodos, todo]);
  }, []);

  const handleRemoveTodo = useCallback((id) => {
    setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="App">
      {/* <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} /> */}
    </div>
  );
}

// 16. Use functions in useState for lazy initialization and performance gains, as they are invoked only once.
// Using a function in useState ensures the initial state is computed only once.
// BAD -- We read the theme from local storage every time the component renders
const THEME_LOCAL_STORAGE_KEY = "101-react-tips-theme";

function PageWrapperOne({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || "dark"
  );

  const handleThemeChange = (theme) => {
    setTheme(theme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  };

  return (
    <div
      className="page-wrapper"
      style={{ background: theme === "dark" ? "black" : "white" }}
    >
      <div className="header">
        <button onClick={() => handleThemeChange("dark")}>Dark</button>
        <button onClick={() => handleThemeChange("light")}>Light</button>
      </div>
      <div>{children}</div>
    </div>
  );
}

// GOOD -- We only read from the local storage when the component mounts.
function PageWrapperTwo({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || "dark"
  );

  const handleThemeChange = (theme) => {
    setTheme(theme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  };

  return (
    <div
      className="page-wrapper"
      style={{ background: theme === "dark" ? "black" : "white" }}
    >
      <div className="header">
        <button onClick={() => handleThemeChange("dark")}>Dark</button>
        <button onClick={() => handleThemeChange("light")}>Light</button>
      </div>
      <div>{children}</div>
    </div>
  );
}

// 17. Use react context for broadly needed, static state to prevent prop drilling

// 37. Simplify state updates with useImmer or useImmerReducer
export function AppTwoOne() {
  const [{ email, password }, setState] = useImmer({
    email: "",
    password: "",
  });
  const onEmailChange = (event) => {
    setState((draftState) => {
      draftState.email = event.target.value;
    });
  };
  const onPasswordChange = (event) => {
    setState((draftState) => {
      draftState.password = event.target.value;
    });
  };
  // / Rest of logic
}

const initialState = { count: 0 };

function reducer(draft, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return void draft.count++;
    case "decrement":
      return void draft.count--;
  }
}

function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

// 38. Use Redux or redux-toolkit (or another state management solution) for complex client-side state accessed across multiple components
//  Note: You can also consider other alternatives to Redux, such as Zustand or Recoil.

// / ///    React Code Optimization       /// /
// 40. Prevent unnecessary re-renders with memo

// 42. Prefer named functions over arrow functions when declaring a memoized component
// Arrow functions often result in generic names like _c2, making debugging and profiling more difficult.
const ExpensiveListOne = memo(({ posts }) => {
  /// Rest of implementation
});

// GOOD -- The component's name will be visible in DevTools.
const ExpensiveListTwo = memo(function ExpensiveListFn({ posts }) {
  /// Rest of implementation
});

// 43. Cache expensive computations or preserve references with useMemo
// 00. Difference between useMemo and React.memo
// React.memo --
// Purpose: React.memo is a higher-order component (HOC) used to optimize the re-rendering of functional components. It is used to memoize the entire component, meaning React will skip re-rendering the component if its props haven't changed
const MyComponentOne = React.memo((props) => {
  // Component logic
  return <div>{props.value}</div>;
});

// useMemo --
//Purpose: useMemo is a React hook that memoizes a computed value so that it is recalculated only when its dependencies change. It is typically used to optimize expensive calculations or to prevent re-creating objects or functions on every render.
function MyComponentTwo({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort(); // expensive calculation
  }, [items]); // re-run when 'items' changes

  return <div>{sortedItems.join(", ")}</div>;
}

// In short:
// React.memo is about optimizing components,
// useMemo is about optimizing values or computations inside components.

// 44. Use useCallback to memoize functions

// 46. Leverage lazy loading and Suspense to make your apps load faster
// When you're building your app, consider using lazy loading and Suspense for code that is:
// 1. Expensive to load.
// 2. Only relevant to some users (like premium features).
// 3. Not immediately necessary for the initial user interaction.

// 47. Throttle your network to simulate a slow network

// 48. Use react-window or react-virtuoso to efficiently render lists
// Never render a long list of items all at once—such as chat messages, logs, or infinite lists.
// Doing so can cause the browser to freeze.
// Instead, virtualize the list. This means rendering only the subset of items likely to be visible to the user.

// 49. Use StrictMode to catch bugs in your components before deploying them to production
// Using StrictMode is a proactive way to detect potential issues in your application during development.

// It helps identify problems such as:

// 1. Incomplete cleanup in effects, like forgetting to release resources.
// 2. Impurities in React components, ensuring they return consistent JSX given the same inputs (props, state, and context).

// 50. Install the React Developer Tools browser extension to view/edit your components and detect performance issues
// This extension lets you:
// 1. Visualize and delve into the details of your React components, examining everything from props to state.
// 2. Directly modify a component's state or props to see how changes affect behavior and rendering.
// 3. Profile your application to identify when and why components are re-rendering, helping you spot performance issues.
// use guide -- https://www.freecodecamp.org/news/how-to-use-react-dev-tools/
