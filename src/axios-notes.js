import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://cork-board-notes.firebaseio.com/'
})

export default instance