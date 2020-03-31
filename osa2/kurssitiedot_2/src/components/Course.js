import React from "react"

const Header = () => {
    return (
      <div>
      <h1>Web Development Curriculum</h1>
      </div>
    )
  }
  
  const Total = ({ courses }) => {
    const courseExercises = courses[0].parts.map(function(x) {
      return x.exercises;
    });
    var result = courseExercises.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    return(
      <p><b>total of {result} exercises</b></p>
    ) 
  }
  
  const Total2 = ({ courses }) => {
    const courseExercises = courses[1].parts.map(function(x) {
      return x.exercises;
    });
    var result = courseExercises.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    return(
      <p><b>total of {result} exercises</b></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ courses }) => {
    return (
      <div>
        <h3>{courses[0].name}</h3>
        <Part part={courses[0].parts[0]} />
        <Part part={courses[0].parts[1]} />
        <Part part={courses[0].parts[2]} />
        <Part part={courses[0].parts[3]} />
        <Total courses={courses} />
        <h3>{courses[1].name}</h3>
        <Part part={courses[1].parts[0]} />
        <Part part={courses[1].parts[1]} />
        <Total2 courses={courses} />
      </div>
    )
  }

const Course = ({ courses }) => {
    return (
      <div>
        <Header courses={courses} />
        <Content courses={courses} />
      </div>
    )
  }

export default Course