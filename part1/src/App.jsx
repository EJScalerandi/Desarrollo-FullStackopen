const Header = (props) => {
  return (
    <h1>
      {props.title}
    </h1>      
  )
};

const Content = (props) => {
  return (
    <>
      {props.parts.map(part => (
        <div key={part.name}>
          <p>{part.name}</p>
          <p>{part.exercises}</p>
        </div>
      ))}
    </>
  )
};

const Total = (props) => {
  const totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>
      Number of exercises {totalExercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
