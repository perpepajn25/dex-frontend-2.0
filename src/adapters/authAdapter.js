export const fetchLogin = (user) => {
  const url = 'http://localhost:3000/api/v1/login'
  const options = {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ user })
  }
  return fetch(url, options)
  .then(resp => responseHandler(resp))
}

export const fetchReauthUser = () => {
  const url = 'http://localhost:3000/api/v1/reauth'
  const options = {
    headers: headers(localStorage.getItem('token'))
  }
  return fetch(url, options)
  .then(resp => responseHandler(resp))
}





// helper methods

const headers = (token) => {
  if (token) {
      return {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token
      }
  } else {
      return {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
}

const responseHandler = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      // throw error
      console.log(response)
    }
}
