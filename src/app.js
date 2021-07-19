import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  forwardRef,
} from 'react'
import useWindowSize from './hook/usewindowsize'
import usePreValue from './hook/usePreValue'
import MyForm from './component/myForm'
import FancyInput from './hook/FancyInput'
import './app.css'

const App = function () {
  const [time, setTime] = useState(Date.now())
  const foo = useRef(null)
  const handleClick = useCallback(() => {
    setTime(Date.now())
  }, [])

  useEffect(() => {
    foo.current.addEventListener('click', handleClick)
    return () => {
      foo.current.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <Foo ref={foo}>
      <Counter></Counter>
      <WindowSize></WindowSize>
      <PreValue time={time}></PreValue>
      <MyForm />
      <FancyInputWrapper />
      <input type="button" value="click" />
    </Foo>
  )
}

const PreValue = ({ time }) => {
  return (
    <div>
      <p>now:{time}</p>
      <p>pre:{usePreValue(time)}</p>
    </div>
  )
}

const FancyInputWrapper = () => {
  const fancyInputRef = useRef()

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => console.log(fancyInputRef.current)}>
        父组件访问子组件的实例属性
      </button>
    </div>
  )
}

const Foo = forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>
})

const Counter = () => {
  const [count, setCount] = useState({ a: 0 })
  const [countcb, setCountcb] = useState(0)
  function handleClick() {
    setTimeout(() => {
      setCount({ a: ++count.a })
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
      Count: {count.a}
      Countcb: {countcb}
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickFn}>+</button>
    </>
  )
}

const WindowSize = React.memo(() => {
  const windowSize = useWindowSize()
  return (
    <div>
      <div>{windowSize}</div>
    </div>
  )
})

export default App
