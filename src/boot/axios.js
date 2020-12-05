import Vue from 'vue'
import axios from 'axios'
import { axiosConfig } from '../config/global.js'

axios.defaults.baseURL = axiosConfig.baseURL
axios.defaults.headers.post['Content-Type'] = axiosConfig.header.post;
axios.defaults.timeout = axiosConfig.timeout

// Vue.prototype.$axios = axios


window.axios = axios


// async function test(){
// 	try {
// 		const ninjas = await getJSON("data/ninjas.json")
// 		// const missions = awit getJSON(missions[0].missionsUrl);
//
// 		console.log(ninjas)
// 	} catch(e) {
// 		console.log("Error: ", e)
// 	}
// }
