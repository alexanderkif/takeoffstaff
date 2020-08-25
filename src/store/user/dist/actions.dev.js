"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = loginUser;
exports.exitUser = exitUser;
// import axios from 'axios'
// import { Notify } from 'quasar'
var baseUrl = 'https://my-json-server.typicode.com/alexanderkif/takeoffstaff'; // postUser (name, password) {
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
                    console.log('loginUser data[0]', data[0]); // check for error response

                    if (response.ok) {
                      _context.next = 7;
                      break;
                    }

                    // get error message from body or default to response statusText
                    error = data && data.message || response.statusText;
                    return _context.abrupt("return", Promise.reject(error));

                  case 7:
                    context.commit('setUser', data[0]);

                  case 8:
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