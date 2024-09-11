const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name}/>
      <Content content={course.parts}/>
      <Total content={course.parts}/>
    </div>
  )
}

const Header = ({courseName})=>{
  return (
    <div>
      <h1>{courseName}</h1>
      </div>
  )
}

const Content = ({content}) =>{
  return(
    <div>
      {content.map(part =>(
        <Part key={part.id} part={part}/>
      ))}
    </div>
  )
}

const Part = ({part}) => {
  return(
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}
const Total = ({content}) =>{
  const total = content.reduce((sum, part)=> sum + part.exercises, 0)
  
  return (
    <div>
      <p>Total number of exercises: {total}</p>
  
    </div>
  )
}



export default App