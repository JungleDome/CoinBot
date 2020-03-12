'use strict'

module.exports = (function () {
    const Pixel = require("./Pixel.js");
    const Tile = require("./Tile.js");

    function TileSystem() {
    }
    TileSystem.EarthRadius = 6371000;
    TileSystem.MaxLatitude = 90.0;
    TileSystem.MaxLongitude = 180.0;
    TileSystem.MinLatitude = -90.0;
    TileSystem.MinLongitude = -180.0;
    TileSystem.TILE_SIZE = 256;


    TileSystem.INSTANCE_$LI$ = function () { if (TileSystem.INSTANCE == null)
        TileSystem.INSTANCE = new TileSystem(); return TileSystem.INSTANCE; };
    ;
    TileSystem.prototype.getTILE_SIZE = function () {
        return TileSystem.TILE_SIZE;
    };
    TileSystem.prototype.getEarthRadius = function () {
        return TileSystem.EarthRadius;
    };
    TileSystem.prototype.getMinLatitude = function () {
        return TileSystem.MinLatitude;
    };
    TileSystem.prototype.getMaxLatitude = function () {
        return TileSystem.MaxLatitude;
    };
    TileSystem.prototype.getMinLongitude = function () {
        return TileSystem.MinLongitude;
    };
    TileSystem.prototype.getMaxLongitude = function () {
        return TileSystem.MaxLongitude;
    };
    TileSystem.prototype.LatLonToQuadKey$double$double$int = function (d, d2, i) {
        return this.LatLonToQuadKey$LatLon$int(new LatLon(d, d2), i);
    };
    TileSystem.prototype.LatLonToQuadKey = function (d, d2, i) {
        if (((typeof d === 'number') || d === null) && ((typeof d2 === 'number') || d2 === null) && ((typeof i === 'number') || i === null)) {
            return this.LatLonToQuadKey$double$double$int(d, d2, i);
        }
        else if (((d != null && d instanceof LatLon) || d === null) && ((typeof d2 === 'number') || d2 === null) && i === undefined) {
            return this.LatLonToQuadKey$LatLon$int(d, d2);
        }
        else
            throw new Error('invalid overload');
    };
    TileSystem.prototype.LatLonToQuadKey$LatLon$int = function (latLon, i) {
        return this.TileXYToQuadKey(this.PixelXYToTileXY(this.LatLonToPixelXY(latLon, i)), i);
    };
    TileSystem.prototype.QuadKeyToLatLon = function (str) {
        var QuadKeyToTileXY = this.QuadKeyToTileXY(str);
        return this.PixelXYToLatLong(this.TileXYToPixelXY(QuadKeyToTileXY), QuadKeyToTileXY.getLevelOfDetail());
    };
    TileSystem.prototype.Clip = function (d, d2, d3) {
        return Math.min(Math.max(d, d2), d3);
    };
    TileSystem.prototype.MapSize = function (i) {
        return TileSystem.TILE_SIZE << i;
    };
    TileSystem.prototype.GroundResolution = function (d, i) {
        return (((Math.cos((d * 3.141592653589793) / 180) * 2) * 3.141592653589793) * TileSystem.EarthRadius) / (((function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(this.MapSize(i))) & 4294967295);
    };
    TileSystem.prototype.MapScale = function (d, i, i2) {
        return (this.GroundResolution(d, i) * i2) / 0.0254;
    };
    TileSystem.prototype.LatLonToPixelXY = function (latLon, i) {
        var Clip = this.Clip(latLon.getLatitude(), TileSystem.MinLatitude, TileSystem.MaxLatitude);
        var Clip2 = this.Clip(latLon.getLongitude(), TileSystem.MinLongitude, TileSystem.MaxLongitude);
        var d = 180;
        Clip2 = (Clip2 + d) / 360;
        Clip = Math.sin((Clip * 3.141592653589793) / d);
        d = 1;
        Clip = 0.5 - (Math.log((d + Clip) / (d - Clip)) / 12.566370614359172);
        var MapSize = Math.abs((this.MapSize(i) & 4294967295));
        var d2 = (Clip2 * MapSize) + 0.5;
        Clip2 = MapSize - 1.0;
        var Clip3 = this.Clip(d2, 0.0, Clip2);
        d2 = (Clip * MapSize) + 0.5;
        return new Pixel((Clip3 | 0), (this.Clip(d2, 0.0, Clip2) | 0));
    };
    TileSystem.prototype.PixelXYToLatLong = function (pixel, i) {
        var MapSize = (((function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(this.MapSize(i))) & 4294967295);
        var d = MapSize - 1;
        var d2 = 360;
        return new LatLon(90 - ((Math.atan(Math.exp(((-(0.5 - (this.Clip(pixel.getY(), 0.0, d) / MapSize))) * 2) * 3.141592653589793)) * d2) / 3.141592653589793), d2 * ((this.Clip(pixel.getX(), 0.0, d) / MapSize) - 0.5));
    };
    TileSystem.prototype.PixelXYToTileXY = function (pixel) {
        return new Tile((pixel.getX() / TileSystem.TILE_SIZE | 0), (pixel.getY() / TileSystem.TILE_SIZE | 0), 23);
    };
    TileSystem.prototype.TileXYToPixelXY = function (tile) {
        return new Pixel(tile.getX() * TileSystem.TILE_SIZE, tile.getY() * TileSystem.TILE_SIZE);
    };
    TileSystem.prototype.TileXYToQuadKey = function (tile, i) {
        var stringBuilder = { str: "", toString: function () { return this.str; } };
        var _loop_1 = function () {
            {
                var c_1 = '0';
                var i2 = 1 << (i - 1);
                if ((tile.getX() & i2) !== 0) {
                    c_1 = String.fromCharCode(49);
                }
                if ((i2 & tile.getY()) !== 0) {
                    c_1 = String.fromCharCode(((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })((String.fromCharCode(((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(c_1) + 1)))) + 1));
                }
                /* append */ (function (sb) { sb.str = sb.str.concat(c_1); return sb; })(stringBuilder);
                i--;
            }
        };
        while ((i >= 1)) {
            _loop_1();
        }
        ;
        var stringBuilder2 = stringBuilder.str;
        return stringBuilder2;
    };
    TileSystem.prototype.QuadKeyToTileXY = function (str) {
        var length = str.length;
        var i = 0;
        var i2 = 0;
        for (var i3 = length; i3 >= 1; i3--) {
            {
                var i4 = 1 << (i3 - 1);
                switch ((str.charAt(length - i3)).charCodeAt(0)) {
                    case 48 /* '0' */:
                        break;
                    case 49 /* '1' */:
                        i |= i4;
                        continue;
                    case 50 /* '2' */:
                        break;
                    case 51 /* '3' */:
                        i |= i4;
                        break;
                    default:
                }
                i2 |= i4;
            }
            ;
        }
        return new Tile(i, i2, length);
    };
    return TileSystem;
}());
// TileSystem["__class"] = "TileSystem";
