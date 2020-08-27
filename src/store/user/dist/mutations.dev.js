"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = setUser;
exports.exitUser = exitUser;
exports.deleteContact = deleteContact;

function setUser(state, user) {
  state.user = user;
}

function exitUser(state) {
  state.user = null;
}

function deleteContact(state, contactName) {
  state.user.contacts = state.user.contacts.filter(function (contact) {
    return contact.name !== contactName;
  });
}