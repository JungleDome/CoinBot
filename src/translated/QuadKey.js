'use strict'
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * This is a very simple example that just shows an alert.
 * @param {number} d
 * @param {number} d2
 * @param {number} i
 * @class
 */

var QuadKey = function () {
    const TileSystem = require("./TileSystem.js");
    const LatLon = require("./LatLon.js");

    var _this = QuadKey;


    function QuadKey(d, d2, i) {


        if (((typeof d === 'number') || d === null) && ((typeof d2 === 'number') || d2 === null) && ((typeof i === 'number') || i === null)) {
            var __args = arguments;
            if (_this.bottomLeft === undefined)
                _this.bottomLeft = null;
            if (_this.bottomRight === undefined)
                _this.bottomRight = null;
            if (_this.center === undefined)
                _this.center = null;
            if (_this.latlon === undefined)
                _this.latlon = null;
            if (_this.pixel === undefined)
                _this.pixel = null;
            if (_this.quadKey === undefined)
                _this.quadKey = null;
            if (_this.tile === undefined)
                _this.tile = null;
            if (_this.topLeft === undefined)
                _this.topLeft = null;
            if (_this.topRight === undefined)
                _this.topRight = null;
            if (_this.zoom === undefined)
                _this.zoom = 0;
            if (_this.bottomLeft === undefined)
                _this.bottomLeft = null;
            if (_this.bottomRight === undefined)
                _this.bottomRight = null;
            if (_this.center === undefined)
                _this.center = null;
            if (_this.latlon === undefined)
                _this.latlon = null;
            if (_this.pixel === undefined)
                _this.pixel = null;
            if (_this.quadKey === undefined)
                _this.quadKey = null;
            if (_this.tile === undefined)
                _this.tile = null;
            if (_this.topLeft === undefined)
                _this.topLeft = null;
            if (_this.topRight === undefined)
                _this.topRight = null;
            if (_this.zoom === undefined)
                _this.zoom = 0;
            (function () {
                _this.fromLatLon(new LatLon(d, d2), i);
            })();
        }
        else if (((d != null && d instanceof LatLon) || d === null) && ((typeof d2 === 'number') || d2 === null) && i === undefined) {
            var __args = arguments;
            var latLon_1 = __args[0];
            var i_1 = __args[1];
            if (_this.bottomLeft === undefined)
                _this.bottomLeft = null;
            if (_this.bottomRight === undefined)
                _this.bottomRight = null;
            if (_this.center === undefined)
                _this.center = null;
            if (_this.latlon === undefined)
                _this.latlon = null;
            if (_this.pixel === undefined)
                _this.pixel = null;
            if (_this.quadKey === undefined)
                _this.quadKey = null;
            if (_this.tile === undefined)
                _this.tile = null;
            if (_this.topLeft === undefined)
                _this.topLeft = null;
            if (_this.topRight === undefined)
                _this.topRight = null;
            if (_this.zoom === undefined)
                _this.zoom = 0;
            if (_this.bottomLeft === undefined)
                _this.bottomLeft = null;
            if (_this.bottomRight === undefined)
                _this.bottomRight = null;
            if (_this.center === undefined)
                _this.center = null;
            if (_this.latlon === undefined)
                _this.latlon = null;
            if (_this.pixel === undefined)
                _this.pixel = null;
            if (_this.quadKey === undefined)
                _this.quadKey = null;
            if (_this.tile === undefined)
                _this.tile = null;
            if (_this.topLeft === undefined)
                _this.topLeft = null;
            if (_this.topRight === undefined)
                _this.topRight = null;
            if (_this.zoom === undefined)
                _this.zoom = 0;
            (function () {
                _this.fromLatLon(latLon_1, i_1);
            })();
        }
        else if (((typeof d === 'string') || d === null) && d2 === undefined && i === undefined) {
            var __args = arguments;
            var str_1 = __args[0];
            if (_this.bottomLeft === undefined)
                _this.bottomLeft = null;
            if (_this.bottomRight === undefined)
                _this.bottomRight = null;
            if (_this.center === undefined)
                _this.center = null;
            if (_this.latlon === undefined)
                _this.latlon = null;
            if (_this.pixel === undefined)
                _this.pixel = null;
            if (_this.quadKey === undefined)
                _this.quadKey = null;
            if (_this.tile === undefined)
                _this.tile = null;
            if (_this.topLeft === undefined)
                _this.topLeft = null;
            if (_this.topRight === undefined)
                _this.topRight = null;
            if (_this.zoom === undefined)
                _this.zoom = 0;
            if (_this.bottomLeft === undefined)
                _this.bottomLeft = null;
            if (_this.bottomRight === undefined)
                _this.bottomRight = null;
            if (_this.center === undefined)
                _this.center = null;
            if (_this.latlon === undefined)
                _this.latlon = null;
            if (_this.pixel === undefined)
                _this.pixel = null;
            if (_this.quadKey === undefined)
                _this.quadKey = null;
            if (_this.tile === undefined)
                _this.tile = null;
            if (_this.topLeft === undefined)
                _this.topLeft = null;
            if (_this.topRight === undefined)
                _this.topRight = null;
            if (_this.zoom === undefined)
                _this.zoom = 0;
            (function () {
                _this.quadKey = str_1;
                _this.zoom = str_1.length;
                _this.tile = TileSystem.INSTANCE_$LI$().QuadKeyToTileXY(str_1);
                var tileSystem = TileSystem.INSTANCE_$LI$();
                var tile = _this.tile;
                if (tile == null) {
                }
                _this.pixel = tileSystem.TileXYToPixelXY(tile);
                tileSystem = TileSystem.INSTANCE_$LI$();
                var pixel = _this.pixel;
                if (pixel == null) {
                }
                _this.latlon = tileSystem.PixelXYToLatLong(pixel, _this.zoom);
            })();
        }
        else
            throw new Error('invalid overload');

        return _this;
    }
    _this.getQuadKey = function () {
        var str = this.quadKey;
        if (str == null) {
        }
        return str;
    };
    _this.setQuadKey = function (str) {
        this.quadKey = str;
    };
    _this.getLatlon = function () {
        var latLon = this.latlon;
        if (latLon == null) {
        }
        return latLon;
    };
    _this.setLatlon = function (latLon) {
        this.latlon = latLon;
    };
    _this.getTopLeft = function () {
        var latLon = this.topLeft;
        if (latLon == null) {
        }
        return latLon;
    };
    _this.setTopLeft = function (latLon) {
        this.topLeft = latLon;
    };
    _this.getTopRight = function () {
        var latLon = this.topRight;
        if (latLon == null) {
        }
        return latLon;
    };
    _this.setTopRight = function (latLon) {
        this.topRight = latLon;
    };
    _this.getBottomLeft = function () {
        var latLon = this.bottomLeft;
        if (latLon == null) {
        }
        return latLon;
    };
    _this.setBottomLeft = function (latLon) {
        this.bottomLeft = latLon;
    };
    _this.getBottomRight = function () {
        var latLon = this.bottomRight;
        if (latLon == null) {
        }
        return latLon;
    };
    _this.setBottomRight = function (latLon) {
        this.bottomRight = latLon;
    };
    _this.getCenter = function () {
        var latLon = this.center;
        if (latLon == null) {
        }
        return latLon;
    };
    _this.setCenter = function (latLon) {
        this.center = latLon;
    };
    _this.getPixel = function () {
        var pixel = this.pixel;
        if (pixel == null) {
        }
        return pixel;
    };
    _this.setPixel = function (pixel) {
        this.pixel = pixel;
    };
    _this.getTile = function () {
        var tile = this.tile;
        if (tile == null) {
        }
        return tile;
    };
    _this.setTile = function (tile) {
        this.tile = tile;
    };
    _this.getZoom = function () {
        return this.zoom;
    };
    _this.setZoom = function (i) {
        this.zoom = i;
    };
    /*private*/ _this.fromLatLon = function (latLon, i) {
        this.zoom = i;
        this.latlon = latLon;
        this.pixel = TileSystem.INSTANCE_$LI$().LatLonToPixelXY(latLon, i);
        var tileSystem = TileSystem.INSTANCE_$LI$();
        var pixel = this.pixel;
        if (pixel == null) {
        }
        this.tile = tileSystem.PixelXYToTileXY(pixel);
        tileSystem = TileSystem.INSTANCE_$LI$();
        var tile = this.tile;
        if (tile == null) {
        }
        this.quadKey = tileSystem.TileXYToQuadKey(tile, i);
    };
    return QuadKey;
}();
// QuadKey["__class"] = "QuadKey";
module.exports = QuadKey;
