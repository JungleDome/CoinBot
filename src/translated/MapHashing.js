'use strict'
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
module.exports =
function (MapHashing) {
    /**
     * This is a very simple example that just shows an alert.
     * @param {number} d
     * @param {number} d2
     * @param {number} i
     * @class
     */
    var QuadKey = (function () {
        // var _this = this;
        function QuadKey(d, d2, i) {
            var _this = this;
            if (((typeof d === 'number') || d === null) && ((typeof d2 === 'number') || d2 === null) && ((typeof i === 'number') || i === null)) {
                var __args = arguments;
                if (this.bottomLeft === undefined)
                    this.bottomLeft = null;
                if (this.bottomRight === undefined)
                    this.bottomRight = null;
                if (this.center === undefined)
                    this.center = null;
                if (this.latlon === undefined)
                    this.latlon = null;
                if (this.pixel === undefined)
                    this.pixel = null;
                if (this.quadKey === undefined)
                    this.quadKey = null;
                if (this.tile === undefined)
                    this.tile = null;
                if (this.topLeft === undefined)
                    this.topLeft = null;
                if (this.topRight === undefined)
                    this.topRight = null;
                if (this.zoom === undefined)
                    this.zoom = 0;
                if (this.bottomLeft === undefined)
                    this.bottomLeft = null;
                if (this.bottomRight === undefined)
                    this.bottomRight = null;
                if (this.center === undefined)
                    this.center = null;
                if (this.latlon === undefined)
                    this.latlon = null;
                if (this.pixel === undefined)
                    this.pixel = null;
                if (this.quadKey === undefined)
                    this.quadKey = null;
                if (this.tile === undefined)
                    this.tile = null;
                if (this.topLeft === undefined)
                    this.topLeft = null;
                if (this.topRight === undefined)
                    this.topRight = null;
                if (this.zoom === undefined)
                    this.zoom = 0;
                (function () {
                    
                    _this.QuadKey.prototype.fromLatLon(new MapHashing.LatLon(d, d2), i);
                })();
            }
            else if (((d != null && d instanceof MapHashing.LatLon) || d === null) && ((typeof d2 === 'number') || d2 === null) && i === undefined) {
                var __args = arguments;
                var latLon_1 = __args[0];
                var i_1 = __args[1];
                if (this.bottomLeft === undefined)
                    this.bottomLeft = null;
                if (this.bottomRight === undefined)
                    this.bottomRight = null;
                if (this.center === undefined)
                    this.center = null;
                if (this.latlon === undefined)
                    this.latlon = null;
                if (this.pixel === undefined)
                    this.pixel = null;
                if (this.quadKey === undefined)
                    this.quadKey = null;
                if (this.tile === undefined)
                    this.tile = null;
                if (this.topLeft === undefined)
                    this.topLeft = null;
                if (this.topRight === undefined)
                    this.topRight = null;
                if (this.zoom === undefined)
                    this.zoom = 0;
                if (this.bottomLeft === undefined)
                    this.bottomLeft = null;
                if (this.bottomRight === undefined)
                    this.bottomRight = null;
                if (this.center === undefined)
                    this.center = null;
                if (this.latlon === undefined)
                    this.latlon = null;
                if (this.pixel === undefined)
                    this.pixel = null;
                if (this.quadKey === undefined)
                    this.quadKey = null;
                if (this.tile === undefined)
                    this.tile = null;
                if (this.topLeft === undefined)
                    this.topLeft = null;
                if (this.topRight === undefined)
                    this.topRight = null;
                if (this.zoom === undefined)
                    this.zoom = 0;
                (function () {
                    _this.QuadKey.prototype.fromLatLon(latLon_1, i_1);
                })();
            }
            else if (((typeof d === 'string') || d === null) && d2 === undefined && i === undefined) {
                var __args = arguments;
                var str_1 = __args[0];
                if (this.bottomLeft === undefined)
                    this.bottomLeft = null;
                if (this.bottomRight === undefined)
                    this.bottomRight = null;
                if (this.center === undefined)
                    this.center = null;
                if (this.latlon === undefined)
                    this.latlon = null;
                if (this.pixel === undefined)
                    this.pixel = null;
                if (this.quadKey === undefined)
                    this.quadKey = null;
                if (this.tile === undefined)
                    this.tile = null;
                if (this.topLeft === undefined)
                    this.topLeft = null;
                if (this.topRight === undefined)
                    this.topRight = null;
                if (this.zoom === undefined)
                    this.zoom = 0;
                if (this.bottomLeft === undefined)
                    this.bottomLeft = null;
                if (this.bottomRight === undefined)
                    this.bottomRight = null;
                if (this.center === undefined)
                    this.center = null;
                if (this.latlon === undefined)
                    this.latlon = null;
                if (this.pixel === undefined)
                    this.pixel = null;
                if (this.quadKey === undefined)
                    this.quadKey = null;
                if (this.tile === undefined)
                    this.tile = null;
                if (this.topLeft === undefined)
                    this.topLeft = null;
                if (this.topRight === undefined)
                    this.topRight = null;
                if (this.zoom === undefined)
                    this.zoom = 0;
                (function () {
                    _this.quadKey = str_1;
                    _this.zoom = str_1.length;
                    _this.tile = MapHashing.TileSystem.INSTANCE_$LI$().QuadKeyToTileXY(str_1);
                    var tileSystem = MapHashing.TileSystem.INSTANCE_$LI$();
                    var tile = _this.tile;
                    if (tile == null) {
                    }
                    _this.pixel = tileSystem.TileXYToPixelXY(tile);
                    tileSystem = MapHashing.TileSystem.INSTANCE_$LI$();
                    var pixel = _this.pixel;
                    if (pixel == null) {
                    }
                    _this.latlon = tileSystem.PixelXYToLatLong(pixel, _this.zoom);
                })();
            }
            else
                throw new Error('invalid overload');

                return this.QuadKey.prototype;
        }
        QuadKey.prototype.getQuadKey = function () {
            var str = this.quadKey;
            if (str == null) {
            }
            return str;
        };
        QuadKey.prototype.setQuadKey = function (str) {
            this.quadKey = str;
        };
        QuadKey.prototype.getLatlon = function () {
            var latLon = this.latlon;
            if (latLon == null) {
            }
            return latLon;
        };
        QuadKey.prototype.setLatlon = function (latLon) {
            this.latlon = latLon;
        };
        QuadKey.prototype.getTopLeft = function () {
            var latLon = this.topLeft;
            if (latLon == null) {
            }
            return latLon;
        };
        QuadKey.prototype.setTopLeft = function (latLon) {
            this.topLeft = latLon;
        };
        QuadKey.prototype.getTopRight = function () {
            var latLon = this.topRight;
            if (latLon == null) {
            }
            return latLon;
        };
        QuadKey.prototype.setTopRight = function (latLon) {
            this.topRight = latLon;
        };
        QuadKey.prototype.getBottomLeft = function () {
            var latLon = this.bottomLeft;
            if (latLon == null) {
            }
            return latLon;
        };
        QuadKey.prototype.setBottomLeft = function (latLon) {
            this.bottomLeft = latLon;
        };
        QuadKey.prototype.getBottomRight = function () {
            var latLon = this.bottomRight;
            if (latLon == null) {
            }
            return latLon;
        };
        QuadKey.prototype.setBottomRight = function (latLon) {
            this.bottomRight = latLon;
        };
        QuadKey.prototype.getCenter = function () {
            var latLon = this.center;
            if (latLon == null) {
            }
            return latLon;
        };
        QuadKey.prototype.setCenter = function (latLon) {
            this.center = latLon;
        };
        QuadKey.prototype.getPixel = function () {
            var pixel = this.pixel;
            if (pixel == null) {
            }
            return pixel;
        };
        QuadKey.prototype.setPixel = function (pixel) {
            this.pixel = pixel;
        };
        QuadKey.prototype.getTile = function () {
            var tile = this.tile;
            if (tile == null) {
            }
            return tile;
        };
        QuadKey.prototype.setTile = function (tile) {
            this.tile = tile;
        };
        QuadKey.prototype.getZoom = function () {
            return this.zoom;
        };
        QuadKey.prototype.setZoom = function (i) {
            this.zoom = i;
        };
        QuadKey.prototype.fromLatLon = function (latLon, i) {
            this.zoom = i;
            this.latlon = latLon;
            this.pixel = MapHashing.TileSystem.INSTANCE_$LI$().LatLonToPixelXY(latLon, i);
            var tileSystem = MapHashing.TileSystem.INSTANCE_$LI$();
            var pixel = this.pixel;
            if (pixel == null) {
            }
            this.tile = tileSystem.PixelXYToTileXY(pixel);
            tileSystem = MapHashing.TileSystem.INSTANCE_$LI$();
            var tile = this.tile;
            if (tile == null) {
            }
            this.quadKey = tileSystem.TileXYToQuadKey(tile, i);
        };
        return QuadKey;
    }());
    MapHashing.QuadKey = QuadKey;
    QuadKey["__class"] = "MapHashing.QuadKey";
    var LatLon = (function () {
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
    MapHashing.LatLon = LatLon;
    LatLon["__class"] = "MapHashing.LatLon";
    var Pixel = (function () {
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
    MapHashing.Pixel = Pixel;
    Pixel["__class"] = "MapHashing.Pixel";
    var Tile = (function () {
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
    MapHashing.Tile = Tile;
    Tile["__class"] = "MapHashing.Tile";
    var TileSystem = (function () {
        function TileSystem() {
        }
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
            return this.LatLonToQuadKey$MapHashing_LatLon$int(new MapHashing.LatLon(d, d2), i);
        };
        TileSystem.prototype.LatLonToQuadKey = function (d, d2, i) {
            if (((typeof d === 'number') || d === null) && ((typeof d2 === 'number') || d2 === null) && ((typeof i === 'number') || i === null)) {
                return this.LatLonToQuadKey$double$double$int(d, d2, i);
            }
            else if (((d != null && d instanceof MapHashing.LatLon) || d === null) && ((typeof d2 === 'number') || d2 === null) && i === undefined) {
                return this.LatLonToQuadKey$MapHashing_LatLon$int(d, d2);
            }
            else
                throw new Error('invalid overload');
        };
        TileSystem.prototype.LatLonToQuadKey$MapHashing_LatLon$int = function (latLon, i) {
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
            var MapSize = (((function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(this.MapSize(i))) & 4294967295);
            var d2 = (Clip2 * MapSize) + 0.5;
            Clip2 = MapSize - 1.0;
            var Clip3 = this.Clip(d2, 0.0, Clip2);
            d2 = (Clip * MapSize) + 0.5;
            return new MapHashing.Pixel((Clip3 | 0), (this.Clip(d2, 0.0, Clip2) | 0));
        };
        TileSystem.prototype.PixelXYToLatLong = function (pixel, i) {
            var MapSize = (((function (n) { return n < 0 ? Math.ceil(n) : Math.floor(n); })(this.MapSize(i))) & 4294967295);
            var d = MapSize - 1;
            var d2 = 360;
            return new MapHashing.LatLon(90 - ((Math.atan(Math.exp(((-(0.5 - (this.Clip(pixel.getY(), 0.0, d) / MapSize))) * 2) * 3.141592653589793)) * d2) / 3.141592653589793), d2 * ((this.Clip(pixel.getX(), 0.0, d) / MapSize) - 0.5));
        };
        TileSystem.prototype.PixelXYToTileXY = function (pixel) {
            return new MapHashing.Tile((pixel.getX() / TileSystem.TILE_SIZE | 0), (pixel.getY() / TileSystem.TILE_SIZE | 0), 23);
        };
        TileSystem.prototype.TileXYToPixelXY = function (tile) {
            return new MapHashing.Pixel(tile.getX() * TileSystem.TILE_SIZE, tile.getY() * TileSystem.TILE_SIZE);
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
            return new MapHashing.Tile(i, i2, length);
        };
        return TileSystem;
    }());
    TileSystem.EarthRadius = 6371000;
    TileSystem.MaxLatitude = 90.0;
    TileSystem.MaxLongitude = 180.0;
    TileSystem.MinLatitude = -90.0;
    TileSystem.MinLongitude = -180.0;
    TileSystem.TILE_SIZE = 256;
    MapHashing.TileSystem = TileSystem;
    TileSystem["__class"] = "MapHashing.TileSystem";
    MapHashing.TileSystem.INSTANCE_$LI$();
};
