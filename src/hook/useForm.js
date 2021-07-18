import { useState, useCallback } from 'react'

// 除了初始值之外，还提供了一个 validators 对象，
// 用于提供针对某个字段的验证函数
const useForm = (initialValues = {}, validators = {}) => {
  const [values, setValues] = useState(initialValues)
  // 定义了 errors 状态
  const [errors, setErrors] = useState({})

  const setFieldValue = useCallback(
    (name, value) => {
      setValues((values) => ({
        ...values,
        [name]: value,
      }))

      // 如果存在验证函数，则调用验证用户输入
      if (validators[name]) {
        const errMsg = validators[name](value)
        setErrors((errors) => ({
          ...errors,
          // 如果返回错误信息，则将其设置到 errors 状态，否则清空错误状态
          [name]: errMsg || null,
        }))
      }
    },
    [validators]
  )
  // 将 errors 状态也返回给调用者
  return { values, errors, setFieldValue }
}

export default useForm
