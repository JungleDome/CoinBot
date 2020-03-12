'use strict'

module.exports = (function () {
    function Pixel(i, i2) {
        if (this.f6414x === undefined)
            this.f6414x = 0;
        if (this.f6415y === undefined)
            this.f6415y = 0;
        this.f6414x = i;
        this.f6415y = i2;
    }
    Pixel.copy$default = function (pixel, i, i2, i3, obj) {
        if ((i3 & 1) !== 0) {
            i = pixel.f6414x;
        }
        if ((i3 & 2) !== 0) {
            i2 = pixel.f6415y;
        }
        return pixel.copy(i, i2);
    };
    Pixel.prototype.component1 = function () {
        return this.f6414x;
    };
    Pixel.prototype.component2 = function () {
        return this.f6415y;
    };
    Pixel.prototype.copy = function (i, i2) {
        return new Pixel(i, i2);
    };
    Pixel.prototype.equals = function (r3) {
        throw Object.defineProperty(new Error("Method not decompiled: network.xyo.coin.map.Pixel.equals(java.lang.Object):boolean"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
    };
    Pixel.prototype.hashCode = function () {
        return (this.f6414x * 31) + this.f6415y;
    };
    Pixel.prototype.toString = function () {
        var _this = this;
        var stringBuilder = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat("Pixel(x="); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(_this.f6414x); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(", y="); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(_this.f6415y); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(")"); return sb; })(stringBuilder);
        return stringBuilder.str;
    };
    Pixel.prototype.getX = function () {
        return this.f6414x;
    };
    Pixel.prototype.getY = function () {
        return this.f6415y;
    };
    return Pixel;
}());
// Pixel["__class"] = "Pixel";
