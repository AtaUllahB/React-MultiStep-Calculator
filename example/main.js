import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from '../react-multistep'

import StepOne from './stepOne'


const steps = [
  { component: <StepOne /> },

]

const App = () => (
  <div className='container'>
    <MultiStep steps={steps} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
