export default function () {
  return {
    userDetails: {},

    proto: {
      errorCode: null
    },

    activeGameId: 1,

    games: [
      { id: 1, logo: "dota.svg", name: "全部", total: 25, today: 10, early: 15 },
      { id: 2, logo: "dota.svg", name: "Dota2", total: 3, today: 1, early: 2 },
      { id: 3, logo: "dota.svg", name: "CSGO", total: 9, today: 3, early: 6 },
      { id: 4, logo: "dota.svg", name: "王者荣耀", total: 15, today: 10, early: 5 },
      { id: 5, logo: "dota.svg", name: "英雄联盟", total: 20, today: 10, early: 10 }
    ],

    matchs: [
      {
        match_id: 37286954,
        game_id: 1,
        game_logo: "dota.svg",
        match_name: "xxx联赛",
        round: 3,
        start_time: 1604966400,
        bets_count: 30,
        status: 1,

        live_url: "",

        teams: [
          {
            pos: 1,
            id: 1,
            name: "武汉卓尔",
            logo: "dota.svg",
            score: 98
          },
          {
            pos: 2,
            id: 2,
            name: "青岛双鹿",
            logo: "dota.svg",
            score: 100
          }
        ],
        segments:
        {
          id: 1,
          name: "全场",

          // 玩法
          gameplays:
          {
            id: 12345,
            name: "获胜者",
            is_top: true,
            bets: [
              {
                id: 1,
                team_id: 1,
                name: "武汉让分100",
                status: 1,
                odds: 1.6,
                is_available: true,
                is_locked: false,
                total_amount: 10000,
                limit_min: 10,
                limit_max: 5000,
                win: -1
              },
              {
                id: 2,
                team_id: 2,
                name: "武汉让分100",
                status: 1,
                odds: 2.7,
                is_available: true,
                is_locked: false,
                total_amount: 10000,
                limit_min: 10,
                limit_max: 5000,
                win: -1
              }
            ]
          }

        }

      }
    ],

    bills: [
      // {
      //   id: 1,
      //   winner: "xxx",
      //   odds: 1.75,
      //   round: "全场",
      //   time: "赛前",
      //   vs: "team1 -vs- team2",
      //   min: 10,
      //   max: 1000
      // }
    ],

    bets: []

  }
}
