import * as React from 'react'
import * as ReactDom from 'react-dom'
import Counter from './component/Counter'

class Main extends React.Component {
  componentDidMount() {
    console.log('sidebar is mount')
  }

  componentWillUnmount() {
    console.log('sidebar will unmount')
  }

  render() {
    return (
      <div>
        <div>Hello this is react component</div>
        <Counter />
      </div>
    )
  }
}

const toRegister = (el: HTMLDivElement) => {
  return {
    mount: () => {
      console.log('sidebar mount function is called')
      ReactDom.render(<Main />, el)
    },
    unmount: () => ReactDom.unmountComponentAtNode(el)
  }
}

const { registry } = window
if (registry) {
  console.log('registry is ready')
  registry.define('sidebar-common', toRegister)
} else {
  console.log('registry is undefined')
  ReactDom.render(<Main />, document.getElementById('sidebar-common'))
}
