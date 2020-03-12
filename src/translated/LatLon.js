'use strict'

module.exports = (function () {
    function LatLon(d, d2) {
        if (this.latitude === undefined)
            this.latitude = 0;
        if (this.longitude === undefined)
            this.longitude = 0;
        this.latitude = d;
        this.longitude = d2;
    }
    LatLon.copy$default = function (latLon, d, d2, i, obj) {
        if ((i & 1) !== 0) {
            d = latLon.latitude;
        }
        if ((i & 2) !== 0) {
            d2 = latLon.longitude;
        }
        return latLon.copy(d, d2);
    };
    LatLon.prototype.component1 = function () {
        return this.latitude;
    };
    LatLon.prototype.component2 = function () {
        return this.longitude;
    };
    LatLon.prototype.copy = function (d, d2) {
        return new LatLon(d, d2);
    };
    LatLon.prototype.equals = function (r5) {
        throw Object.defineProperty(new Error("Method not decompiled: network.xyo.coin.map.LatLon.equals(java.lang.Object):boolean"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
    };
    LatLon.prototype.hashCode = function () {
        var doubleToLongBits = (function (f) { var buf = new ArrayBuffer(4); (new Float32Array(buf))[0] = f; return (new Uint32Array(buf))[0]; })(Math.fround(this.latitude));
        var i = (((doubleToLongBits ^ (doubleToLongBits >>> 32)) | 0)) * 31;
        var doubleToLongBits2 = (function (f) { var buf = new ArrayBuffer(4); (new Float32Array(buf))[0] = f; return (new Uint32Array(buf))[0]; })(Math.fround(this.longitude));
        return i + (((doubleToLongBits2 ^ (doubleToLongBits2 >>> 32)) | 0));
    };
    LatLon.prototype.toString = function () {
        var _this = this;
        var stringBuilder = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat("LatLon(latitude="); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(_this.latitude); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(", longitude="); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(_this.longitude); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(")"); return sb; })(stringBuilder);
        return stringBuilder.str;
    };
    LatLon.prototype.getLatitude = function () {
        return this.latitude;
    };
    LatLon.prototype.getLongitude = function () {
        return this.longitude;
    };
    return LatLon;
}());
// LatLon["__class"] = "LatLon";
