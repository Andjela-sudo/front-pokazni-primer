import axios from 'axios'

export const getAll = () => axios.get(`https://my-pokazni-projekat.herokuapp.com/items`)