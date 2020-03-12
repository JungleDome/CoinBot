const authAPI = "https://securetoken.googleapis.com/v1/token?alt=proto&key=AIzaSyAeKFISBd45jVnd7MwyvVdD984QDYyHRPc&grant_type=refresh_token&refresh_token=AEu4IL0GmAeBcVzoXccAKu9K1AWtwz0ZHMN33WY3XwQM29ZbMmiOjNql4PP2-FZ3TzTUTtQvlyOb9-rxwkvsc5HRD6l2_TEssGSI62tU-s4hfyM-RKIoWP42_pBrzAwTLfVH4tiGP44nsJn1y1kPrCud7TwhG0Ou-vjY1mdTugvGHhG7FUDYZ73wL9ah64rzmKOllWrf26r5rhmemGitRNJw_MFRS1DIkCpYmVVOqVdTzjqucxN_zO7BFhAbC2N3o6E6UIkip9yx";
const coinAPI = "https://coinprod-dot-xyo-network-1522800011804.appspot.com/";

const Geomine = require('./command/Geomine.js');
const Automine = require('./command/Automine.js');
const APIHelper = require("./util/APIHelper.js");
const Init = require('./command/Init.js');

//var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhjZjBjNjQyZDQwOWRlODJlY2M5MjI4ZTRiZDc5OTkzOTZiNTY3NDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRG9tZSBKdW5nbGUiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veHlvLW5ldHdvcmstMTUyMjgwMDAxMTgwNCIsImF1ZCI6Inh5by1uZXR3b3JrLTE1MjI4MDAwMTE4MDQiLCJhdXRoX3RpbWUiOjE1ODM1MjkyMTMsInVzZXJfaWQiOiJhMFZhUG5EOXBTZ2pKOTg1MjBKWWxLeXF2WUQzIiwic3ViIjoiYTBWYVBuRDlwU2dqSjk4NTIwSllsS3lxdllEMyIsImlhdCI6MTU4MzU1NzIxNSwiZXhwIjoxNTgzNTYwODE1LCJlbWFpbCI6Imp1bmdsZWRvbWUxOTA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJqdW5nbGVkb21lMTkwNUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NZ74kDgC-yoxzPUd8OhHk-pScja9HEYyO6PQXA_i3W5_fD2x5W9wwPNrLJfZSWXqaMtf_Pe0uKVYUb3y2Y_uLKYnprYIuvpOsJc-qCGA_9WEB4U3q1_338Z74nCV0Gdo_BG40oirvJG2Vsi3vPlgIdxYmxOlMSunucoRLla1Zy_fu7BrrJY6OaBstNn38wwyfECQZkefn0Eerb7mzQmU56zprPPACX79gKrQx594N4MIrctyfH3ETu5ho8bbOMdvWLEtMXAWuWEdWrJN0Wof44yV3ayvLDwbyDSQFVR5q_rRdcLjzRfJhnVjJIAbHAILd_1UIr5Fampf4xDVYDsv4A";


// var ui = new inquirer.ui.BottomBar();
//
// // pipe a Stream to the log zone
// outputStream.pipe(ui.log);
//
// // Or simply write output
// ui.log.write('something just happened.');
// ui.log.write('Almost over, standby!');
//
// // During processing, update the bottom bar content to display a loader
// // or output a progress bar, etc
// ui.updateBottomBar('new bottom bar content');

const myConsole = require("serverline");
const chalk = require("chalk");


const keyMap = new Map();
keyMap.set('a', {fn:toggleAutowalk, name:"Autowalk"});
keyMap.set('g', {fn:toggleAutoGeomine, name:"Geomine"});
keyMap.set('z', {fn:showGeomineStatus, name:"Status-Geomine"});
keyMap.set('t', {fn:testing, name:"Testing"});
keyMap.set('c', {fn:clearConsole, name:"ClearConsole"});

var promptString = "=> ";
for (const [key, value] of keyMap.entries()) {
	var shortcut = "["+chalk.yellowBright.underline.bold(key.toUpperCase())+"]";
	var name = chalk.magentaBright(shortcut.concat(value.name));
	promptString = promptString.concat(name).concat("   ");
}


myConsole.init();
myConsole.setPrompt(promptString);

console.log(chalk.yellowBright.bgBlue("-----------------CoinBot-----------------"));
console.log(chalk.blackBright.bgBlue("This is a coin auto mine and checkin bot."));
console.log(chalk.yellowBright.bgBlue("--------Hope you have a nice day!--------"));
console.log("");


process.stdin.on('keypress', (str, key) => {
	if (keyMap.has(key.name)) {
      var fn = keyMap.get(key.name).fn;

	  if (typeof fn !== "function") {
		  console.error("Invalid value of command callback");
	  } else {
		  fn();
	  }
  	}
});

var isInit = false;
var helper = undefined;
var geomine = undefined;

function init() {
	if (!isInit) {
		helper = APIHelper();
		Init(helper).init();
		isInit = true;
	}
}


var autoWalkInterval = undefined;
function toggleAutowalk() {
	init();
	if (autoWalkInterval) {
  		console.log(chalk.redBright("▒▒ Stopping auto walk & mine"));
		clearInterval(autoWalkInterval);
		autoWalkInterval = undefined;
  	} else {
  		console.log(chalk.greenBright("▒▒ Starting auto walk & mine"));
		let automine = Automine(helper);
		// console.log(automine);
		automine.automine();
		autoWalkInterval = setInterval(function() {
			automine.automine();
		}, 1000);
  	}
}

var autoGeomineStartTime = undefined;
var autoGeomineInterval = undefined;
function toggleAutoGeomine() {
	init();
	if (autoGeomineInterval) {
		var timeDiffInMinutes = ((Date.now() - autoGeomineStartTime) / 1000 / 60).toFixed(2);
  		console.log(chalk.redBright("▒▒ Stopping auto acquire geomine"));
		console.log(chalk.cyanBright.bgGreen(`[R] This geomine session earned ${geomine.totalEarned} coins and missed ${geomine.loseId.length}+${geomine.totalZeroReward} geomines in ${timeDiffInMinutes} minutes.`));
		clearInterval(autoGeomineInterval);
		autoGeomineStartTime = undefined;
		autoGeomineInterval = undefined;
  	} else {
  		console.log(chalk.greenBright("▒▒ Starting auto acquire geomine"));
		let geomine = Geomine(helper);
		geomine.acknowledgeAll();
		autoGeomineStartTime = Date.now();
		autoGeomineInterval = setInterval(function() {
			geomine.acknowledgeAll();
		}, 10 * 1000);
  	}
}


function testing() {
	let mh = new Object();
	// require("./src/translated/MapHashing.js")(mh);
	const mapHash = require("./util/MapHash.js");

	var latitude = 33.986072;
	var longitude = -118.252459;
	var padding = 0.003;
	var getBoundary = true;

	if (getBoundary) {
		padding = 0.003;
	} else {
		padding = 0;
	}


	var result = mapHash().getMapHash(latitude, longitude, padding, mh);

	// console.log("MinMapHash:"+result[0]);
	// console.log("MaxMapHash:"+result[1]);


	// console.log(mh());
	// console.log(mh);
}

function clearConsole() {
	console.clear();
	myConsole.getRL().write(null, { ctrl: true, name: 'l' });
}

function showGeomineStatus() {
	if (geomine == undefined) {
		console.log(chalk.redBright("[E] Please start geomine."));
	} else {
		var timeDiffInMinutes = ((Date.now() - autoGeomineStartTime) / 1000 / 60).toFixed(2);
		console.log(chalk.cyanBright.bgGreen(`[R] This geomine session earned ${geomine.totalEarned} coins and missed ${geomine.loseId.length}+${geomine.totalZeroReward} geomines in ${timeDiffInMinutes} minutes.`));
	}
}

/*
getGoogleToken().then((resolve1) => {
	console.log("Is Token Empty:",resolve1 == undefined);

	updateSubscription(resolve1);

	// var max = 20;
	// var p = Promise.reject();
	//
	// for(var i=0; i<max; i++) {
	// 	console.log(`Running list coin ${i} time....`);
	//     p = p.catch(listCoin(resolve1)).catch(rejectDelay);
	// }
	// p = p.then(console.log("Success!")).catch(console.log("Really Error!"));

	//wrapper(resolve1,wrapper);
	// listCoin(resolve1).then(sleeper(3000)).then(() => {
	//
	// });
	;
});
*/






/**
 * List all Big Win.
 * @param {string} Google API Access Token
 */
function listCoin(token) {
	var requestPayload = {
		"command": "getRecentBigWins",
		"uid": "a0VaPnD9pSgjJ98520JYlKyqvYD3",
		"token": token
	};

	console.log("Is Token Empty:",token == undefined);

	var strippedPayload = JSON.stringify(requestPayload);

	var requestOptions = {
		url: coinAPI,
		headers: {
			"Content-Type": "application/json",
			"X-Timestamp": checkSum(strippedPayload)
		},
		gzip: true,
		method: "POST",
		body: strippedPayload

	}

	request(requestOptions, ((error,response,body) => {
		console.log('statusCode:', response && response.statusCode);
		console.log('body:', body);

		if (response.statusCode == 500) {
			retryCounter++;
			console.log(`Running list coin ${retryCounter} time....`);
			setTimeout(() => {listCoin(token)},3000);
		} else {
			return 1;
		}
	}));


	//Promise style
	// request(requestOptions)
	// 	.then((response, body) => {
	// 		console.log(checkSum(strippedPayload));
	// 		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	// 		console.log('body:', body); // Print the HTML for the Google homepage.
	// 		return 1;
	// 	})
	// 	.catch((err) => {
	// 		console.error("Inner Error:",err.message);
	// 		throw err;
	// 	});


}


function updateSubscription(token) {
	var requestPayload = {
	   "command":"updateSubscription",
	   "subOs":"android",
	   "subSku":"",
	   "subToken":"",
	   "subOrder":"",
	   "subTime":0,
	   "subSource":"",
	   "appsflyerId":"1583513178947-8262984497420603757",
	   "uid":"a0VaPnD9pSgjJ98520JYlKyqvYD3",
	   "os":"android",
	   "osVersion":"5.1.1",
	   "osDevMode":false,
	   "token":token
	};

	console.log("Is Token Empty:",token == undefined);

	var strippedPayload = JSON.stringify(requestPayload);

	var requestOptions = {
		url: coinAPI,
		headers: {
			"Content-Type": "application/json",
			"X-Timestamp": checkSum(strippedPayload)
		},
		gzip: true,
		method: "POST",
		body: strippedPayload

	}

	request(requestOptions, ((error,response,body) => {
		console.log('statusCode:', response && response.statusCode);
		console.log('body:', body);
		console.log(token);
		console.log(checkSum(requestPayload));
		if (response.statusCode == 500) {
			retryCounter++;
			console.log(`Running updateSubscription ${retryCounter} time....`);
			setTimeout(() => {updateSubscription(token)},3000);
		} else {
			return 1;
		}
	}));
}


let sleep = require('util').promisify(setTimeout);
