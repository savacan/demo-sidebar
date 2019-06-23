import * as React from 'react'
import * as ReactDom from 'react-dom'

const Main: React.FC = () => {
  return <div> sidebar test </div>
}

ReactDom.render(<Main />, document.getElementById('sidebar-common'))
