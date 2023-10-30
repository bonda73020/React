const baseURL = 'https://jsonplaceholder.typicode.com'
const posts = '/posts'
const launchesURL = 'https://api.spacexdata.com/v3'

const urls = {
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    }
}

export {
    baseURL,
    urls,
    launchesURL
}