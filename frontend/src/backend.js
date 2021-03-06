import axios from "axios"

var request = axios.create({
    baseURL: '/api/'
})

request.defaults.xsrfCookieName = 'csrftoken'
request.defaults.xsrfHeaderName = 'X-CSRFToken'


export default {
    build(body) {
        return request.post('/build/', body)
    },
    save(project) {
        return request.post('/save/', project)
    },
    plugin_search(query) {
        return request.get('/plugin/', {params:{q:query}})
    },
    plugin_install(name, url) {
        return request.post('/plugin/install/', {name, url})
    },
}
