import { useState, useRef, useImperativeHandle, useCallback } from 'react'

const FancyInput = React.forwardRef((props, ref) => {
  const [fresh, setFresh] = useState(false)
  const attRef = useRef(0)
  useImperativeHandle(
    ref,
    () => ({
      attRef,
      fresh,
    }),
    [fresh]
  )

  const handleClick = useCallback(() => {
    attRef.current++
  }, [])

  return (
    <div>
      {attRef.current}
      <button onClick={handleClick}>Fancy</button>
      <button onClick={() => setFresh(!fresh)}>刷新</button>
    </div>
  )
})
FancyInput.displayName = 'FancyInput'

export default FancyInput
