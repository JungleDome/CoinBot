module.exports = function() {
    const QuadKey = require("../src/translated/QuadKey.js");


    this.getMapHash = function(lat,long,padding, mapHashingInstance) {
        var d = lat;
        var d2 = long;
        var d3 = padding;

        var d4 = d2 + d3;
        var d5 = d + d3;
        var quadKey = QuadKey(d5, d4, 23).getQuadKey();
        var d6 = d2 - d3;

        var quadKey2 = QuadKey(d5, d6, 23).getQuadKey();
        var d7 = d - d3;
        var quadKey3 = QuadKey(d7, d4, 23).getQuadKey();
        var quadKey4 = QuadKey(d7, d6, 23).getQuadKey();
        var i = 0;
        while (i < 22 && quadKey.charAt(i) == quadKey2.charAt(i) && quadKey2.charAt(i) == quadKey3.charAt(i) && quadKey3.charAt(i) == quadKey4.charAt(i)) {
            i++;
        }
        if (quadKey != null) {
            quadKey2 = quadKey.substring(0, i);
            quadKey3 = "(this as java.lang.Strin…ing(startIndex, endIndex)";



            i = 23 - i;
            var substring = "00000000000000000000000".substring(0, i);
            quadKey4 = quadKey2.concat(substring);
            var substring1 = "33333333333333333333333".substring(0, i);
            quadKey2 = quadKey2.concat(substring1);
            console.log("MinMapHash:".concat(quadKey4)+" MaxMapHash:"+quadKey2);
            return [quadKey4, quadKey2];
        }
    }

    return this;
};
