import tokenService from './tokenService';

const BASE_URL = '/api/requests/';

function getAll() {
  return fetch(BASE_URL, {headers: {'content-type': 'application/json', authorization:'Bearer ' + tokenService.getToken()}})
  .then(res => res.json())
}
function create(request) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json',authorization:'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(request)
  }).then(res => res.json());
}

function update(request) {
  return fetch(`${BASE_URL}/${request._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json',authorization:'Bearer ' + tokenService.getToken()},
    body: JSON.stringify(request)
  }).then(res => res.json());
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {authorization:'Bearer ' + tokenService.getToken()}
  }).then(res => res.json());
}

export default {
  getAll,
  create,
  deleteOne,
  update,
};