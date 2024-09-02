import data from '../../data'
const projects = data.projects.reverse()

export default defineEventHandler(async (event) => {

  return {
    projects
  }
})