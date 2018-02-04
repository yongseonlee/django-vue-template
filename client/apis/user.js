import axios from 'axios'

export async function getCurrentUser () {
  return (await axios.get('/api/current-user')).data
}
