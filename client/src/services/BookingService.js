const baseURL = 'http://localhost:3000/api/guests/'

export default {
  postGuest(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteGuest(id){
    return fetch(baseURL, {
      method: 'DELETE'
    })
  }



}
