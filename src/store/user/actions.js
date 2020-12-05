/*
export function someAction (context) {
}
*/

// rootState, state
// dispatch('gaming/test', {}, { root:true })

export function getSms ({ }, payload) {
  axios.post('https://192.168.8.76:7010/v1/sms', payload)
}

export function registerUser ({ }, payload) {
  axios.post('user/register', payload)
}

export function loginUser ({ commit }, payload) {
  // const promis = new Promis((resolve, reject) => {
  //
  // })
  axios.post('user/login', payload)
    .then(response => {
      if (response.data.code == 200) {
        localStorage.setItem('sessionId', response.data.data.sessionId)
        commit('setDetail', response.data.data)
      }
    })
}

export function handleAuthStateChanged ({ commit }) {
  let payload = authPayload({})
  axios.post('user/common_router', {
    group: 'workSrv',
    cmd: 'getUserArg',
    seq: 0,
    data: payload
  })
    .then(response => {
      if (response.data.code == 200) {
        commit('setDetail', response.data.data)
        // commit('gaming/setUserDetails', {a:1}, { root: true })
      }
      else {
        //todo
      }
    })
}

export function logoutUser ({ commit }) {
  let payload = authPayload({})
  axios.post('user/common_router', {
    group: 'workSrv',
    cmd: 'dropOut',
    seq: 0,
    data: payload
  })
    .then(response => {
      console.log('response: ', response)
      if (response.data.code == 200) {
        commit('setDetail', {})
        localStorage.removeItem('sessionId')
      }
      else {
        //todo
      }
    })

}
