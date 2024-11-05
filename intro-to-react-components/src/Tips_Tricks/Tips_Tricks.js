// React Tips & Tricks for Beginers to Experts
// --> KISS - Keep It Simple Stupid - Less code less bugs

import { useCallback, useMemo, useState } from "react";

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
