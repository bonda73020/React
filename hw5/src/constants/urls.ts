const baseURL = "https://jsonplaceholder.typicode.com"

const users ='/users'
const posts = '/posts'

const urls = {
    users,
    posts:{
        byId:(id:number)=>`${posts}/${id}`
    }
}

export{
    baseURL,
    urls
}