// export function someMutation (/* state */) {
// }

export function setProto (state, payload) {
  if (payload.code !== 200) {
    state.proto.errorCode = payload.code
  } else {
    state.proto[payload.cmd] = payload.data
  }
}

export function setGames (state, payload) {
  state.proto.games = payload
}

export function setActiveGameId (state, payload) {
  state.activeGameId = payload
}

export function setBills (state, payload) {
  state.bills = payload
}

export function setBets (state, payload) {
  state.bets = payload
}
