import WebSocket from 'html5-websocket'
import ReconnectingWebSocket from 'reconnecting-websocket'
import { socketConfig } from '../config/global.js'

import store from '../store';

const options = { constructor: WebSocket };

// window.socket = new WebSocket('wss://' + socketConfig.ip + ':' + socketConfig.port + socketConfig.path);

const socket = new ReconnectingWebSocket(
	'wss://' + socketConfig.ip + ':' + socketConfig.port + socketConfig.path,
	undefined,
	options
);

socket.timeout = 1000;

socket.addEventListener('open', () => {
	console.log("连接成功");
	setInterval(heartbeat, 30000)
});

socket.addEventListener('close', () => {
	console.log("连接断开");
});

socket.onerror = (err) => {
	if (err.code == 'EHOSTDOWN') {
		console.log('Error: server down.')
	}
};


socket.addEventListener('message', (e) => {
	let json = JSON.parse(e.data)
	// console.log(json);
	if (json.cmd !== 'heartbeat')
		store.commit('gaming/setProto', json)
});



function heartbeat () {
	net.send({
		cmd: "heartbeat",
		group: "gw",
		seq: 110,
		data: {
			Phone: ""
		}
	})
}

window.net = {
	send: function (data) {
		socket.send(JSON.stringify(data))
	}
}