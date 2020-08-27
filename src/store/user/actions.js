// import axios from 'axios'
// import { Notify } from 'quasar'

const baseUrl = 'https://my-json-server.typicode.com/alexanderkif/takeoffstaff'

export async function loginUser (context, { name, password }) {
  await fetch(`${baseUrl}/users?name=${name}&password=${password}`)
    .then(async response => {
      const data = await response.json()

      if (!response.ok) {
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

export function deleteContact (context, contactName) {
  context.commit('deleteContact', contactName)
}

export function updateContact (context, contact) {
  context.commit('updateContact', contact)
}
