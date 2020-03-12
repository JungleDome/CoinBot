

module.exports = function(helperInstance) {
    const chalk = require("chalk");

    this.apiHelper = helperInstance;

    this.init = function() {
        var jsonPayload = {
    		"command":"ring",
    		"ckey":"A3000B3000C3000D0.003E250.0F10.0G250.0H1500I1500J1000K1000L250M250N5.0O0.5P0.25Q0.1R1609.34",
    		"minMaphash":"02301231131000000000000",
    		"maxMaphash":"02301231131033333333333",
    		"isMining":false,
    		"xyoEnabled":false,
    		"referrer":"website",
    		"referrerUid":"",
    		"deviceId":"96c4876dba0e1054",
    		"deviceName":"HUAWEI MLA-L12",
    		"deviceFingerprint":"HUAWEI\/MLA-L12\/HWMLA:5.1.1\/HUAWEIMLA-L12\/500200118:user\/release-keys",
    		"deviceProduct":"MLA-L12",
    		"deviceHardware":"samsungexynox8895",
    		"deviceModel":"HUAWEI MLA-L12",
    		"deviceManufacturer":"HUAWEI",
    		"deviceBoard":"universal8895",
    		"deviceHost":"SWDG2909",
    		"foregroundSeconds":10,
    		"pendingBonusDropPoints":0.5,
    		"maphash":"02301231131012202021212",
    		"uid":"a0VaPnD9pSgjJ98520JYlKyqvYD3",
    		"os":"android","osVersion":"5.1.1",
    		"osDevMode":false,
    		"token":""
    	};

        return this.apiHelper.processRequest(jsonPayload).then((response) => {
            console.log(chalk.cyan("[I] Ringing COIN server..."));
            console.log(response);
        });
    }

    return this;

}
