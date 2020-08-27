"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = loginUser;
exports.exitUser = exitUser;
exports.deleteContact = deleteContact;
// import axios from 'axios'
// import { Notify } from 'quasar'
var baseUrl = 'https://my-json-server.typicode.com/alexanderkif/takeoffstaff';

function loginUser(context, _ref) {
  var _this = this;

  var name, password;
  return regeneratorRuntime.async(function loginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          name = _ref.name, password = _ref.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("".concat(baseUrl, "/users?name=").concat(name, "&password=").concat(password)).then(function _callee(response) {
            var data, error;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(response.json());

                  case 2:
                    data = _context.sent;

                    if (response.ok) {
                      _context.next = 6;
                      break;
                    }

                    error = data && data.message || response.statusText;
                    return _context.abrupt("return", Promise.reject(error));

                  case 6:
                    context.commit('setUser', data[0]);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            });
          })["catch"](function (error) {
            _this.errorMessage = error;
            console.error('There was an error!', error);
          }));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function exitUser(context) {
  context.commit('exitUser');
}

function deleteContact(context, contactName) {
  context.commit('deleteContact', contactName);
}