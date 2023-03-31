import { addProject } from '../utils/projectSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const AddProjects = () => {
  const [projects, setProjects] = useState('')
  const dispatch = useDispatch()
  const getPreviewsProjects = useSelector(
    (state) => state.projectdetails.projects
  )
  return (
    <div className='container'>
      <div className='form-group'>
        <label>Projects</label>
        <div className='d-flex '>
          <input
            type='text'
            className='form-control'
            id='exampleInputProject1'
            aria-describedby='projectHelp'
            placeholder='Enter Project Name'
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />
          <button
            type='submit'
            className='btn btn-primary'
            style={{ marginLeft: 2 }}
            onClick={() =>
              dispatch(addProject([...getPreviewsProjects, projects]))
            }
          >
            +
          </button>
        </div>
        <small id='projectHelp' className='form-text text-muted'>
          Below is the list of projects
        </small>
      </div>
      <div className='mt-4'>
        <ul>
          {getPreviewsProjects &&
            getPreviewsProjects.map((names) => {
              return <li>{names}</li>
            })}
        </ul>
      </div>
    </div>
  )
}
export default AddProjects
