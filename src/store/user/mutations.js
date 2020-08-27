export function setUser (state, user) {
  state.user = user
}

export function exitUser (state) {
  state.user = null
}

export function deleteContact (state, contactName) {
  state.user.contacts = state.user.contacts.filter((contact) => contact.name !== contactName)
}
