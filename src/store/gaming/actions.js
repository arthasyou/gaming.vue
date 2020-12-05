// 游戏类型列表
export function getGameList ({ commit }) {
  let payload = {
    channel_id: 1
  }
  payload = authPayload(payload)
  axios.post('user/common_router', {
    group: 'workSrv',
    cmd: 'channel_config',
    seq: 0,
    data: payload
  })
    .then(response => {
      if (response.data.code == 200) {
        commit('setGames', response.data.data)
      }
      else {
        //todo
      }
    })
}


// 获取比赛列表
export function getMatchList () {
  const payload = {
    group: "gameinfo",
    cmd: "match_list",
    data: { game_type_ids: [4, 5, 7, 10], data_type: 2, channel_id: 1, game_status: 0, utype: 0 }
  }
  net.send(payload)
}

export function selectBill ({ state, dispatch }, payload) {
  let bills = state.bills;

  let id = payload.id
  let bill = bills.find(x => { return x.id === id })

  if (bill) {
    dispatch('deleteBill', id)
  } else {
    dispatch('addBill', payload)
  }
}

export function deleteBill ({ state, commit, dispatch }, id) {
  let bills = state.bills;
  bills = bills.filter(x => {
    return x.id !== id
  })
  commit('setBills', bills)
  dispatch('deletePreBet', id)
}

export function addBill ({ state, commit }, payload) {
  let bills = state.bills;
  bills.push(payload)
  commit('setBills', bills)
}

export function preBet ({ state, commit }, payload) {
  let bets = state.bets;
  let id = payload.id
  bets = bets.filter(x => { return x.id !== id })
  if (payload.betVal !== null && payload.betVal !== '' && payload.betVal !== 0) {
    bets.push(payload)
  }
  commit('setBets', bets)
}

export function deletePreBet ({ state, commit }, id) {
  let bets = state.bets;
  bets = bets.filter(x => { return x.id !== id })
  commit('setBets', bets)
}

export function clearBill ({ commit }) {
  commit('setBills', [])
  commit('setBets', [])
}

export function test ({ state, commit }, payload) {
  // let bills = state.bills
  // let b = []
  // bills = bills.forEach(x => {
  //   x.odds = x.odds + 1
  //   b.push(x)
  // });
  // commit('setBills', b)

  axios.post('http://lara.test/api/test', {})
    .then(response => {
      console.log(response.data);
    })

}
