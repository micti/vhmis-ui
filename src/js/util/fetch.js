// Một số hàm hỗ trợ thêm cho request qua fetch API

export function checkErrorResponse (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
