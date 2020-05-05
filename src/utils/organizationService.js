import tokenService from './tokenService';

const BASE_URL = '/api/organizations/';

function signup(organization) {
  return fetch(BASE_URL + 'signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(organization),
    })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error('Email already taken!');
    })
    .then(({
      token
    }) => {
      tokenService.setToken(token);
    });
}

function getOrg() {
  return tokenService.getOrgFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(creds)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({
      token
    }) => tokenService.setToken(token));
}

export default {
  signup,
  getOrg,
  logout,
  login
};