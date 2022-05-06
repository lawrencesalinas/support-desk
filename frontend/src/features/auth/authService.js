import axios from 'axios'

const API_URL = `http://localhost:8000/api/users`

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  console.log(response)

  // save response to local storage including token, wrap in JSON because local storage can only hold string
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// export functions we created
const authService = {
  register,
}

export default authService
