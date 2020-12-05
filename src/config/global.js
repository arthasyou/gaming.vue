const axiosConfig = {
  baseURL: 'https://192.168.10.251:8081/api/v1',
  timeout: 0,
  header: {
    post: 'application/json'
  }
}

const socketConfig = {
  ip: "192.168.10.251",
  port: "8081",
  path: "/api/v1/auth_user/wss"
}




export {
  axiosConfig,
  socketConfig
}
