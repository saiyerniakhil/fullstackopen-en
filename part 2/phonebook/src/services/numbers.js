import axios from 'axios'

const baseUrl = "/api/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data )
}

const create = (personObject) => {
    const request = axios.post(baseUrl,personObject)
    return request.then(response => response.data)
}

const deleteVal = (personObject) => {
    console.log(`${personObject.id} is to be deleted`)
    const request = axios.delete(`${baseUrl}/${personObject["id"]}`)
    return request.then(response => response.data)
}

export default { getAll, create, deleteVal}