import useForm from '../../hooks/useForm'
import React, { useMemo } from 'react'
import './index.scss'
import _ from 'lodash'

function MyForm() {
  // 用 useMemo 缓存 validators 对象
  const validators = useMemo(() => {
    return {
      name: (name) => {
        //调用接口

        // return $axios.request({
        //   url: '/greeting',
        //   data: {
        //     name,
        //   },
        // })

        return Promise.resolve({ errorCode: name })
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

  const handleInput = (type) => (ev) => {
    setFieldValue(type, ev.target.value)
  }

  const prefix = 'myform'
  return (
    <form className={`${prefix}`}>
      <div>
        <label>
          name:
          <input
            name="name"
            value={values.name}
            onChange={handleInput('name')}
          />
        </label>
        {!!errors.name && (
          <div className={`${prefix}-error`}>{errors.name}</div>
        )}
      </div>

      <div>
        <label>
          email:
          <input
            email="password"
            value={values.email}
            onChange={handleInput('email')}
          />
        </label>
        {!!errors.email && (
          <div className={`${prefix}-error`}>{errors.email}</div>
        )}
      </div>

      <label>
        submit:
        <input type="submit" value="submit" />
      </label>
    </form>
  )
}

export default MyForm
