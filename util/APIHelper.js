module.exports = function() {
    const authAPI = "https://securetoken.googleapis.com/v1/token?alt=proto&key=AIzaSyAeKFISBd45jVnd7MwyvVdD984QDYyHRPc&grant_type=refresh_token&refresh_token=AEu4IL0GmAeBcVzoXccAKu9K1AWtwz0ZHMN33WY3XwQM29ZbMmiOjNql4PP2-FZ3TzTUTtQvlyOb9-rxwkvsc5HRD6l2_TEssGSI62tU-s4hfyM-RKIoWP42_pBrzAwTLfVH4tiGP44nsJn1y1kPrCud7TwhG0Ou-vjY1mdTugvGHhG7FUDYZ73wL9ah64rzmKOllWrf26r5rhmemGitRNJw_MFRS1DIkCpYmVVOqVdTzjqucxN_zO7BFhAbC2N3o6E6UIkip9yx";
    const coinAPI = "https://coinprod-dot-xyo-network-1522800011804.appspot.com/";
    const request = require('request-promise-native');
    const chalk = require("chalk");

    //Methods
    this.processRequest = async function(jsonPayload) {
        if (this.token == undefined) {
            this.token = await this.acquireAuthToken().then((resolve) => {
                console.log("Auth token acquired");
                return resolve;
            });
            // console.log(this.token);
        }
        jsonPayload.token = this.token;

        var strippedPayload = JSON.stringify(jsonPayload);

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

        

        return request(requestOptions)
            .then((response) => {
                if (response.statusCode == 500) {
                    console.log(chalk.bgRed("▲ Status error:500",response));
                } else {
                    return JSON.parse(response);
                }
            })
            .catch ((err) => {
                console.log(chalk.bgRed("▲ Request error:",err));
                console.log(chalk.bgRed("▲ Request error payload:",strippedPayload));

                if (err.toString().includes("AUTHENTICATION TOKEN ERROR")) {
                    console.log(chalk.red.bgYellowBright("▲-▲ Reacquiring token and retry..."));
                    return this.acquireAuthToken().then((resolve) => {
                        console.log("Auth token acquired");
                        this.token = resolve;
                    }).then(() => {
                        request(requestOptions)
                        .then((response) => {
                            return JSON.parse(response);
                        })
                        .catch ((err) => {
                            console.log(chalk.bgRed("▲-▲ Retry failed:",err));
                        });
                    });
                }
            });

    }

    this.acquireAuthToken = function() {
        let requestInfo = {
            url: authAPI,
            headers: {
                'Content-Type': 'application/x-protobuf',
                //'X-Firebase-Locale': '',
                //'X-Client-Version': 'Android/GmsCore/X19002000/FirebaseUI-Android',
                //'X-Android-Package': 'network.xyo.coin',
                //'X-Android-Cert': 'B14B7D4279CAF1200AD3D7E3BF04344E7386EBFC',
                //'X-Goog-Spatula': 'CjAKEG5ldHdvcmsueHlvLmNvaW4aHHNVdDlRbm5LOFNBSzA5Zmp2d1EwVG5PRzYvdz0Y0smVwoK154A0',
                //'Connection': 'Keep-Alive',
                //'Accept-Encoding': 'gzip'
            },
            gzip: true,
            method: "POST"
        };


        console.log(chalk.cyanBright("◘◘ Acquiring authentication token..."));
        return request.post(requestInfo)
            .then((response) => {
                // console.log(response);
                var tokens = response.split("Bearer");

                if (tokens.length > 0) {
                    var access_token = tokens[0];

                    var strippedToken = access_token.replace(/[^\x20-\x7E]/g,"");
                    //console.log('Stripped Access Token:', strippedToken);
                    // console.log("Stripped....");
                    // console.log(strippedToken);
                    // this.token = strippedToken;
                    return strippedToken;
                } else {
                    console.error('error:', error);
                    console.log('statusCode:', response && response.statusCode);
                    console.log('body:', body);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function checkSum(str) {
        var length = str.length - 1;
        var i = 51590912;
        if (length >= 0) {
            var i2 = 0;
            while (true) {
                var i3 = i2+1;
                i += str.charCodeAt(i2) * i3;
                //console.log("I:"+i+"I2:"+i2+"|I3:"+i3);
                if (i2 == length) {
                    break;
                }
                i2 = i3;
            }
        }

        var result = (4294967295 & i).toString(16);
        return result;
    }


    //Constructor
    // this.token = this.acquireAuthToken().then((resolve) => {
    //     console.log("Auth token acquired:"+resolve);
    //     return token;
    // });

    return this;
}
