import * as React from 'react'

interface IState {
  count: number
}

interface IProps {
  color?: string
}

class Counter extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }))
  }

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <>
        <button onClick={this.increment} type="button">
          increment
        </button>
        <span> {count} </span>
        <button onClick={this.decrement} type="button">
          decrement
        </button>
      </>
    )
  }
}

export default Counter
