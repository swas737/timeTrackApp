import React from 'react'
import { useSelector } from 'react-redux'

const ShowTask = () => {
  const getTask = useSelector((state) => state.projectdetails.task)

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Project</th>
            <th scope='col'>Task</th>
            <th scope='col'>Spend Time</th>
            <th scope='col'>Description</th>
          </tr>
        </thead>
        {getTask.map((d, i) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope='row'>{d.taskName}</th>
                  <td>{d.selectProject}</td>
                  <td>{d.spendTime}</td>
                  <td>{d.description}</td>
                </tr>
              </tbody>
            </>
          )
        })}
      </table>
    </>
  )
}

export default ShowTask
