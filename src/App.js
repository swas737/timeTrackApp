import React from 'react'
import CreateProject from './component/CreateProject'

import { Provider } from 'react-redux'
import store from './utils/store'
import CreateTask from './component/CreateTask'
import ShowTask from './component/ShowTask'
const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <h4 className='d-flex bg-danger justify-content-center p-2 text-white'>
          Project time tracker
        </h4>
        <div className='row'>
          <div className='col-6'>
            <CreateProject />
          </div>
          <div className='col-6'>
            <CreateTask />
            <ShowTask />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
