// React Tips & Tricks for Beginers to Experts
// --> KISS - Keep It Simple Stupid - Less code less bugs

import { useCallback, useMemo } from "react";

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

// Leverage the children props for cleaner code (and performance benefits)
