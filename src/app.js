import React, { Component, useState, createRef } from 'react'
import useWindowSize from './hook/usewindowsize'
import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Foo>
          <Counter></Counter>
          <WindowSize></WindowSize>
        </Foo>
      </>
    )
  }
}

const Foo = ({ children }) => {
  return <div>{children}</div>
}

const Counter = () => {
  const [count, setCount] = useState(0)
  const [countcb, setCountcb] = useState(0)
  function handleClick() {
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
  }
  function handleClickFn() {
    setTimeout(() => {
      setCountcb((prevCount) => {
        return prevCount + 1
      })
    }, 2000)
  }
  return (
    <>
      Count: {count}
      Countcb: {countcb}
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickFn}>+</button>
    </>
  )
}

const WindowSize = () => {
  const windowSize = useWindowSize()
  return (
    <div>
      <div>{windowSize}</div>
    </div>
  )
}
