import data from '../../data'

const projects = data.records

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') ?? '1'
  return {
    project: projects.find(project => project.projectId === id)
  }
})