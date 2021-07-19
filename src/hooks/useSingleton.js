import { useRef, useEffect } from 'react'

const useSingleton = (callback) => {
  const singleton = useRef(false)
  if (singleton.current) {
    return
  }
  callback && callback()
  singleton.current = true
}

export default useSingleton
