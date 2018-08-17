import axios from 'axios'

export default class Posts{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll(){
        return axios.get('posts');
    }

    get(id){
        return axios.get(`posts/${id}`)
    }

    add(post){
<<<<<<< HEAD
        return axios.post('posts', post)
=======
        return axios.post('posts', "post")
>>>>>>> 22c03bd65f70980b4e03ebab026794c4bed388fd
    }

}

export const posts = new Posts();