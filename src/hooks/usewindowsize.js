import { useState, useEffect, useMemo } from 'react'

function getSize() {
  return window.innerWidth > 1000 ? 'BigSize' : 'SmallSize'
}

// 设置一个 size 的 state 用于保存当前窗口尺寸
export default function useWindowSize() {
  const [size, setSize] = useState(getSize())
  useEffect(() => {
    // 窗口大小变化事件处理函数
    const handler = () => {
      setSize(getSize())
    }
    // 监听 resize 事件
    window.addEventListener('resize', handler)

    // 返回一个 callback 在组件销毁时调用
    return () => {
      // 移除 resize 事件
      window.removeEventListener('resize', handler)
    }
  }, [])

  return size
}
