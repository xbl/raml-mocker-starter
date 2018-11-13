module.exports = (axios, response) => {
  axios.defaults.headers.common['Authorization'] = response.data;
}
