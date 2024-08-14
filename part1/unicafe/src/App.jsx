import { useState } from 'react'

const Statistics = (props)=>{
  return (
    <div>
      <h1>Statistics</h1>
      <h3>good {props.good}</h3>
      <h3>neutral {props.neutral}</h3>
      <h3>bad {props.bad}</h3>
      <h3>all {props.all}</h3>
      <h3>average {props.average}</h3>
      <h3>positive {props.positive}</h3>
    </div>
  )

  
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)


  const handleGoodClick = ()=>{
    setGood(good + 1)
    setAll(all + 1)
    setPositive(good/all)
    setAverage((good - bad) / all)
  };
  const handleNeutralClick = ()=>{
    setNeutral(neutral + 1)
    setAll(all + 1)
  };
  const handleBadClick = ()=>{
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - bad) / all)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      { (good === 0 && neutral === 0 && bad === 0)?(<p>No Feedback Given</p>) : (<Statistics good={good} neutral={neutral} bad={bad}
      all={all} positive={positive} average={average}/>)}
      
      
      
    </div>
      )
}

export default App