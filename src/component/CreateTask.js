import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskDetails } from '../utils/projectSlice'

const CreateTask = () => {
  const [taskName, setTaskName] = useState('')
  const [selectProject, setSelectProject] = useState('')
  const [spendTime, setSpendTime] = useState('')
  const [description, setDescription] = useState('')

  const getProjects = useSelector((state) => state.projectdetails.projects)
  const getTaskProjects = useSelector((state) => state.projectdetails.task)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    let tasks = { taskName, selectProject, spendTime, description }
    if (tasks.taskName) {
      dispatch(taskDetails([...getTaskProjects, tasks]))
      setTaskName('')
      setSelectProject('')
      setSpendTime('')
      setDescription('')
    }
  }
  return (
    <div className='container'>
      <h2>Task</h2>

      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='exampleInputProject1'
            aria-describedby='projectHelp'
            placeholder='Enter Task Name'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <select
            className='form-control'
            aria-label='Default select example'
            defaultValue={selectProject}
            onChange={(e) => setSelectProject(e.target.value)}
          >
            <option selected>Select Projects</option>
            {getProjects.map((d, i) => {
              return (
                <option defaultValue={selectProject} key={i}>
                  {d}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Spend Time(In Hrs)'
            type='text'
            value={spendTime}
            onChange={(e) => setSpendTime(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Description'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input type='submit' className='btn btn-primary' value='Submit' />
        </div>
      </form>
    </div>
  )
}

export default CreateTask
