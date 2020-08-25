// import axios from 'axios'
// import { Notify } from 'quasar'

const baseUrl = 'https://my-json-server.typicode.com/alexanderkif/takeoffstaff'

// postUser (name, password) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: name, password: password })
//   }
//   console.log(`${baseUrl}/users`)
//   fetch(`${baseUrl}/users`, requestOptions)
//     .then(async response => {
//       const data = await response.json()

//       // check for error response
//       if (!response.ok) {
//         // get error message from body or default to response status
//         const error = (data && data.message) || response.status
//         return Promise.reject(error)
//       }
//     })
//     .catch(error => {
//       this.errorMessage = error
//       console.error('There was an error!', error)
//     })
// },

export async function loginUser (context, { name, password }) {
  await fetch(`${baseUrl}/users?name=${name}&password=${password}`)
    .then(async response => {
      const data = await response.json()
      console.log('loginUser data[0]', data[0])

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
      }

      context.commit('setUser', data[0])
    })
    .catch(error => {
      this.errorMessage = error
      console.error('There was an error!', error)
    })
}

export function exitUser (context) {
  context.commit('exitUser')
}
