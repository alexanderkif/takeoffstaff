"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = setUser;
exports.exitUser = exitUser;
exports.deleteContact = deleteContact;
exports.updateContact = updateContact;

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

function updateContact(state, contact) {
  var currentContact = state.user.contacts.filter(function (c) {
    return c.name === contact.name;
  })[0];

  if (currentContact) {
    currentContact.phone = contact.phone;
    currentContact.email = contact.email;
  } else {
    state.user.contacts.push(contact);
  }
}