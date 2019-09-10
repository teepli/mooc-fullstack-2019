import React from "react";
import ReactDOM from "react-dom";
const Header = props => {
  return <h1>{props.course}</h1>;
};

const Content = props => {
  return (
    <>
      <Part content={props.content[0]}></Part>
      <Part content={props.content[1]}></Part>
      <Part content={props.content[2]}></Part>
    </>
  );
};

const Part = props => {
  return (
    <p>
      {props.content.name} {props.content.exercises}
    </p>
  );
};
const Total = props => {
  return (
    <p>
      Number of exercises{" "}
      {props.content[0].exercises +
        props.content[1].exercises +
        props.content[2].exercises}
    </p>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content content={course.parts}></Content>
      <Total content={course.parts}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
