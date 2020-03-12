module.exports = function(helperInstance) {
    const chalk = require("chalk");
    const geolib = require("geolib");
    const mapHash = require("../util/MapHash.js");

    this.apiHelper = helperInstance;

    this.mine = function(latitude, longitude, speed) {

        var requestPayload = {
          "maphash": mapHash().getMapHash(latitude, longitude, 0.00),
          "latitude": latitude,
          "longitude": longitude,
          "ssid": "dream2lteks96c4876dba0e1054",
          "altitude": 0,
          "accuracy": parseFloat(3 + Math.random()).toFixed(1),
          "sentinels": 3,
          "ibeacons": "",
          "appVersion": 252,
          "speed": speed,
          "direction": "E",
          "auto": false,
          "useTiers": true,
          "color": "#4A90E2",
          "mob": 1,
          "team": 0,
          "command": "ring",
          "ckey": "A3000B3000C3000D0.003E250.0F10.0G250.0H1500I1500J1000K1000L250M250N5.0O0.5P0.25Q0.1R1609.34",
          "minMaphash": mapHash().getMapHash(latitude, longitude, 0.03)[0],
          "maxMaphash": mapHash().getMapHash(latitude, longitude, 0.03)[1],
          "isMining": true,
          "xyoEnabled": false,
          "referrer": "website",
          "referrerUid": "",
          "deviceId": "96c4876dba0e1054",
          "deviceName": "HUAWEI MLA-L12",
          "deviceFingerprint": "HUAWEI\/MLA-L12\/HWMLA:5.1.1\/HUAWEIMLA-L12\/500200118:user\/release-keys",
          "deviceProduct": "MLA-L12",
          "deviceHardware": "samsungexynox8895",
          "deviceModel": "HUAWEI MLA-L12",
          "deviceManufacturer": "HUAWEI",
          "deviceBoard": "universal8895",
          "deviceHost": "SWDG2909",
          "foregroundSeconds": 4,
          "pendingBonusDropPoints": 0.5,
          "uid": "a0VaPnD9pSgjJ98520JYlKyqvYD3",
          "os": "android",
          "osVersion": "5.1.1",
          "osDevMode": false,
          "token": ""
        }

        return this.apiHelper.processRequest(requestPayload);
    }

    var prevTime = Date.now();
    var prevLatitude = 33.986072;
    var prevLongitude = -118.252459;
    var prevMapHash = 0;

    this.automine = function() {
        var nextDestPoint = geolib.computeDestinationPoint(
            { latitude: prevLatitude, longitude: prevLongitude },
            ((1200+(Math.floor((Math.random() * 400) + 1)))/1000).toFixed(0),
            180
        );

        var nextLatitude = nextDestPoint.latitude;
    	var nextLongitude = nextDestPoint.longitude;
        var speed = geolib.getSpeed(
            { latitude: prevLatitude, longitude: prevLongitude, time: prevTime },
            { latitude: nextLatitude, longitude: nextLongitude, time: Date.now() }
        ).toFixed(1);

        var currMapHash = mapHash().getMapHash(nextLatitude, nextLongitude, 0.00)[0];
        if (currMapHash != prevMapHash) {
            console.log(`New location (${nextLatitude}:${nextLongitude}:${speed})`);
            this.mine(nextLatitude, nextLongitude, speed).then((response) => {
                var minedInfo = response.mineMaphash;
                if (minedInfo.success == false) {
                    var errorMessage = minedInfo.message;
                    var errorCode = minedInfo.errorCode;
                    console.log("Failed to ");
                } else {
                    var minedAmount = minedInfo.minedAmount;
                    var totalOwned = response.getAccountInfo.xyoCollected;
                    console.log()
                }
                console.log(JSON.stringify(response));
            });
            prevMapHash = currMapHash;
        } else {
            console.log(`Same location map hash detected`);
        }

        prevTime = Date.now();
        prevLatitude = nextLatitude;
        prevLongitude = nextLongitude;
    }

    return this;
};
