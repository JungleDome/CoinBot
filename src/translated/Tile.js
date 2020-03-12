'use strict'

module.exports = (function () {
    function Tile(i, i2, i3) {
        if (this.levelOfDetail === undefined)
            this.levelOfDetail = 0;
        if (this.f6416x === undefined)
            this.f6416x = 0;
        if (this.f6417y === undefined)
            this.f6417y = 0;
        this.f6416x = i;
        this.f6417y = i2;
        this.levelOfDetail = i3;
        
    }
    Tile.copy$default = function (tile, i, i2, i3, i4, obj) {
        if ((i4 & 1) !== 0) {
            i = tile.f6416x;
        }
        if ((i4 & 2) !== 0) {
            i2 = tile.f6417y;
        }
        if ((i4 & 4) !== 0) {
            i3 = tile.levelOfDetail;
        }
        return tile.copy(i, i2, i3);
    };
    Tile.prototype.component1 = function () {
        return this.f6416x;
    };
    Tile.prototype.component2 = function () {
        return this.f6417y;
    };
    Tile.prototype.component3 = function () {
        return this.levelOfDetail;
    };
    Tile.prototype.copy = function (i, i2, i3) {
        return new Tile(i, i2, i3);
    };
    Tile.prototype.equals = function (r3) {
        throw Object.defineProperty(new Error("Method not decompiled: network.xyo.coin.map.Tile.equals(java.lang.Object):boolean"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
    };
    Tile.prototype.hashCode = function () {
        return (((this.f6416x * 31) + this.f6417y) * 31) + this.levelOfDetail;
    };
    Tile.prototype.toString = function () {
        var _this = this;
        var stringBuilder = { str: "", toString: function () { return this.str; } };
        /* append */ (function (sb) { sb.str = sb.str.concat("Tile(x="); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(_this.f6416x); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(", y="); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(_this.f6417y); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(", levelOfDetail="); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(_this.levelOfDetail); return sb; })(stringBuilder);
        /* append */ (function (sb) { sb.str = sb.str.concat(")"); return sb; })(stringBuilder);
        return stringBuilder.str;
    };
    Tile.prototype.getLevelOfDetail = function () {
        return this.levelOfDetail;
    };
    Tile.prototype.getX = function () {
        return this.f6416x;
    };
    Tile.prototype.getY = function () {
        return this.f6417y;
    };
    return Tile;
}());
// Tile["__class"] = "Tile";
