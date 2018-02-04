import axios from 'axios'
import toastr from 'toastr'

export * from './user'

axios.interceptors.response.use(response => response, error => {
  const response = error.response

  // 401 -> login page
  if (response.status === 401) {
    location.href = '/login/'
    return Promise.reject(error)
  }

  // 403
  if (response.status === 403) {
    return Promise.reject(error)
  }
  if (response.data.non_field_errors) {
    toastr.error(`HTTP ${response.status}<br/>${response.data.non_field_errors}`)
    return Promise.reject(error)
  }

  let errStr = ''
  if (typeof response.data === 'object') {
    for (const key in response.data) {
      errStr += `<br/>${key}: ${response.data[key]}`
    }
  } else if (typeof response.data === 'string') {
    errStr = `\n${response.data}`
  }
  toastr.error(`HTTP ${response.status}${errStr}`)
  return Promise.reject(error)
})

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
