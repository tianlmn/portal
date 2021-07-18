import useForm from '../hook/useForm'
import React, { useMemo } from 'react'

function MyForm() {
  // 用 useMemo 缓存 validators 对象
  const validators = useMemo(() => {
    return {
      name: (value) => {
        // 要求 name 的长度不得小于 2
        if (value.length < 2) return 'Name length should be no less than 2.'
        return null
      },
      email: (value) => {
        // 简单的实现一个 email 验证逻辑：必须包含 @ 符号。
        if (!value.includes('@')) return 'Invalid email address'
        return null
      },
    }
  }, [])
  // 从 useForm 的返回值获取 errors 状态
  const { values, errors, setFieldValue } = useForm({}, validators)
  // UI 渲染逻辑...

  return (
    <form id="myform">
      <div>
        <label>
          name:
          <input
            name="name"
            value={values.name}
            onChange={(evt) => setFieldValue('name', evt.target.value)}
          />
        </label>
        {!!errors.name && <div>{errors.name}</div>}
      </div>

      <div>
        <label>
          email:
          <input
            email="password"
            value={values.email}
            onChange={(evt) => setFieldValue('email', evt.target.value)}
          />
        </label>
        {!!errors.email && <div>{errors.email}</div>}
      </div>

      <label>
        submit:
        <input type="submit" value="submit" />
      </label>
    </form>
  )
}

export default MyForm