import axios from 'axios';//npm packages

axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>console.log(res.data));