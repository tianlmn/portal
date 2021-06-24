import React, { Component, useState } from 'react'
import './app.css'

export class App extends Component {
  render() {
    return (
      <>
        <p>111</p>
        <p>111</p>
      </>
    )
  }
}

export default function Counter() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setTimeout(() => {
      setCount(count + 1)
    }, 10000)
  }
  function handleClickFn() {
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount + 1
      })
    }, 10000)
  }
  return (
    <>
      Count: {count}
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickFn}>+</button>
    </>
  )
}
