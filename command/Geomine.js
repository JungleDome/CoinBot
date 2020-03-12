module.exports = function(helperInstance) {
    const chalk = require("chalk");

    this.apiHelper = helperInstance;
    this.loseId = [];
    this.totalLose = this.loseId.length;
    this.totalEarned = 0;
    this.totalZeroReward = 0;

    this.getList = function () {
        var requestPayload = {
    		"command": "getRecentBigWins",
    		"uid": "a0VaPnD9pSgjJ98520JYlKyqvYD3",
            "os":"android",
            "osVersion":"5.1.1",
            "osDevMode":false,
    		"token": ""
    	};

        return this.apiHelper.processRequest(requestPayload);
    }

    this.acknowledgeAll = function () {
        // console.log(chalk.cyan("[I] Acquiring list of geomines..."));
        this.getList().then((geomines) => {
            // console.log("Complete get list",geomines);
            let availableCount = geomines.wins.reduce(function(previousValue, currentObject){
                return previousValue + (currentObject.acknowledged == false ? 1: 0);
            }, 0)
            // console.log(chalk.bgBlue(`[I] There are ${availableCount} available geomines out of ${geomines.total} geomines.`));
            let counter = 1;
            for (i=0;i<geomines.wins.length;i++) {
                // console.log(geomines.wins);
                // console.log("----------------------------------");
                // console.log(geomines.wins[i]);
                var geomine = geomines.wins[i];
                if (geomine.acknowledged == false) {
                    if (geomine.acknowledgeCount < geomines.maxWinners) {
                        this.acknowledge(geomine.reference);
                        console.log(chalk.cyan(`[G] (${counter}/${geomines.total})   Coin Amount: ${geomine.amount}   Acknowledgement Count: ${geomine.acknowledgeCount}   Time Elapsed: ${(Date.now() - geomine.epoch) / 1000}`));
                    } else {
                        if (this.loseId.includes(geomine.reference) == false) {
                            this.loseId.push(geomine.reference);
                            console.log(chalk.yellowBright(`[L] (${counter}/${geomines.total})   Coin Amount: ${geomine.amount}   Acknowledgement Count: ${geomine.acknowledgeCount}   Time Elapsed: ${(Date.now() - geomine.epoch) / 1000}`));
                        }
                    }
                    counter++;
                }
            }
        });

    }

    this.acknowledge = function (uid) {
        var requestPayload = {
           "command":"acknowledgeBigWin",
           "reference":uid,
           "uid":"a0VaPnD9pSgjJ98520JYlKyqvYD3",
           "os":"android",
           "osVersion":"5.1.1",
           "osDevMode":false,
           "token":""
       };



        return this.apiHelper.processRequest(requestPayload)
        .then((response) => {
            this.totalEarned += response.reward;
            if (response.reward == 0) {
                this.totalZeroReward += 1;
            }
            console.log(chalk.green(`[R] Ranking:${response.rank}   Rewards:${response.reward}   Cummulative Rewards:${response.bigwinWitnessRewards}`));
        });
    }

    return this;
};
