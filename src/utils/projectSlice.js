import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'projectdetails',
  initialState: {
    projects: [],
    task: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects = action.payload
    },
    taskDetails: (state, action) => {
      state.task = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProject, taskDetails } = projectSlice.actions

export default projectSlice.reducer
