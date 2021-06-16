import React, { Component } from 'react'
import './app.css'

export default class App extends Component {
  componentDidMount() {
    this.p1 = document.getElementById('parent1')
    this.p2 = document.getElementById('parent2')
    this.c1 = document.getElementById('child1')
    this.c2 = document.getElementById('child2')

    this.c1.addEventListener('click', this.handleClick, { capture: false })
    this.c1.addEventListener('click', this.handleClick1, { capture: true })
    //this.p2.addEventListener('click', this.handleClick, { capture: true })
    this.p2.addEventListener('click', this.handleClick, { capture: true })

    let event = new Event('foo', {
      // 创建一个 type 为 foo 的事件对象，可以被阻止默认行为
      cancelable: true,
    })

    document.addEventListener(
      'foo',
      function (event) {
        // 在 document 上绑定 foo 事件的监听函数
        console.warn('foo:')
        console.log(event.defaultPrevented) // false
        event.preventDefault()
        console.log(event.defaultPrevented) // 还是 false，preventDefault() 无效
      },
      {
        passive: true,
      }
    )

    document.dispatchEvent(event) // 派发自定义事件
  }
  handleClick1 = (e) => {
    console.log(e)
    alert('click1' + e.currentTarget.id)
  }

  handleClick = (e) => {
    console.log('currentTarget: ' + e.currentTarget)
    console.log('target: ' + e.target)

    alert('click' + e.currentTarget.id)
  }
  render() {
    return (
      <>
        <div id="parent1" className="p1">
          <p>This is parent1 div.</p>
          <div id="child1" className="c1">
            <p>This is child1.</p>
          </div>
          <p>This is parent1 div.</p>
        </div>
        <br />
        <div id="parent2" className="p2">
          <p>This is parent2 div.</p>
          <div id="child2" className="c2">
            <p>This is child2. Will bubble.</p>
          </div>
          <p>This is parent2 div.</p>
        </div>
      </>
    )
  }
}
