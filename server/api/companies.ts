import data from '../data'

const companies = data.companies.reverse()

export default defineEventHandler(async (event) => {
  return {
    companies
  }
})