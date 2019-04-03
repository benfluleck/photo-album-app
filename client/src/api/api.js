import axios from 'axios'

export default {
  getAllAlbums: () => axios.get('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5'),
  getAllUsers: () => axios.get('https://jsonplaceholder.typicode.com/users')
}
