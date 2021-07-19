import { useEffect, useRef } from 'react'

const usePreValue = (value) => {
  let valueRef = useRef(value)
  useEffect(() => {
    valueRef.current = value
  })
  return valueRef.current
}

export default usePreValue
