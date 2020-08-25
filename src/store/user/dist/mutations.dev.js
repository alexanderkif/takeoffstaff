"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = setUser;
exports.exitUser = exitUser;

function setUser(state, user) {
  state.user = user;
}

function exitUser(state) {
  state.user = null;
}