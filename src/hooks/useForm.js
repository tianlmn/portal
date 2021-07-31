import _ from 'lodash'
import { useState, useCallback } from 'react'

// 除了初始值之外，还提供了一个 validators 对象，
// 用于提供针对某个字段的验证函数
const useForm = (initialValues = {}, validators = {}) => {
  const [values, setValues] = useState(initialValues)
  // 定义了 errors 状态
  const [errors, setErrors] = useState({})

  // 缓存防抖函数，防抖函数内部使用promise处理异步返回
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validate = useCallback(
    _.debounce((name, value) => {
      const data = validators[name](value)
      if (data instanceof Promise) {
        data.then(({ errorCode }) => {
          setErrors((errors) => ({
            ...errors,
            // 如果返回错误信息，则将其设置到 errors 状态，否则清空错误状态
            [name]: errorCode || null,
          }))
        })
      } else {
        setErrors((errors) => ({
          ...errors,
          // 如果返回错误信息，则将其设置到 errors 状态，否则清空错误状态
          [name]: data || null,
        }))
      }
    }, 1000),
    [validators]
  )

  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => ({
        ...values,
        [name]: value,
      }))

      // 如果存在验证函数，则调用验证用户输入
      if (typeof validators[name] === 'function') {
        validate(name, value)
      }
    },
    [validators, validate]
  )
  // 将 errors 状态也返回给调用者
  return { values, errors, setFieldValue }
}

export default useForm
