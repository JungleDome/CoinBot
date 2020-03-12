class QuadKey {
    const LatLon = require("./src/translated/LatLon.js");

    public LatLon bottomLeft;
    public LatLon bottomRight;
    public LatLon center;
    public LatLon latlon;
    public Pixel pixel;
    public String quadKey;
    public Tile tile;
    public LatLon topLeft;
    public LatLon topRight;
    private int zoom;

    public final String getQuadKey() {
        String str = this.quadKey;
        if (str == null) {
        }
        return str;
    }

    public final void setQuadKey(String str) {
        this.quadKey = str;
    }

    public final LatLon getLatlon() {
        LatLon latLon = this.latlon;
        if (latLon == null) {
        }
        return latLon;
    }

    public final void setLatlon(LatLon latLon) {
        this.latlon = latLon;
    }

    public final LatLon getTopLeft() {
        LatLon latLon = this.topLeft;
        if (latLon == null) {
        }
        return latLon;
    }

    public final void setTopLeft(LatLon latLon) {
        this.topLeft = latLon;
    }

    public final LatLon getTopRight() {
        LatLon latLon = this.topRight;
        if (latLon == null) {
        }
        return latLon;
    }

    public final void setTopRight(LatLon latLon) {
        this.topRight = latLon;
    }

    public final LatLon getBottomLeft() {
        LatLon latLon = this.bottomLeft;
        if (latLon == null) {
        }
        return latLon;
    }

    public final void setBottomLeft(LatLon latLon) {
        this.bottomLeft = latLon;
    }

    public final LatLon getBottomRight() {
        LatLon latLon = this.bottomRight;
        if (latLon == null) {
        }
        return latLon;
    }

    public final void setBottomRight(LatLon latLon) {
        this.bottomRight = latLon;
    }

    public final LatLon getCenter() {
        LatLon latLon = this.center;
        if (latLon == null) {

        }
        return latLon;
    }

    public final void setCenter(LatLon latLon) {
        this.center = latLon;
    }

    public final Pixel getPixel() {
        Pixel pixel = this.pixel;
        if (pixel == null) {
        }
        return pixel;
    }

    public final void setPixel(Pixel pixel) {

        this.pixel = pixel;
    }

    public final Tile getTile() {
        Tile tile = this.tile;
        if (tile == null) {

        }
        return tile;
    }

    public final void setTile(Tile tile) {

        this.tile = tile;
    }

    public final int getZoom() {
        return this.zoom;
    }

    public final void setZoom(int i) {
        this.zoom = i;
    }

    public QuadKey(String str) {

        this.quadKey = str;
        this.zoom = str.length();
        this.tile = TileSystem.INSTANCE.QuadKeyToTileXY(str);
        TileSystem tileSystem = TileSystem.INSTANCE;
        Tile tile = this.tile;
        if (tile == null) {

        }
        this.pixel = tileSystem.TileXYToPixelXY(tile);
        tileSystem = TileSystem.INSTANCE;
        Pixel pixel = this.pixel;
        if (pixel == null) {

        }
        this.latlon = tileSystem.PixelXYToLatLong(pixel, this.zoom);
    }

    public QuadKey(double d, double d2, int i) {
        fromLatLon(new LatLon(d, d2), i);
    }

    public QuadKey(LatLon latLon, int i) {

        fromLatLon(latLon, i);
    }

    private final void fromLatLon(LatLon latLon, int i) {
        this.zoom = i;
        this.latlon = latLon;
        this.pixel = TileSystem.INSTANCE.LatLonToPixelXY(latLon, i);
        TileSystem tileSystem = TileSystem.INSTANCE;
        Pixel pixel = this.pixel;
        if (pixel == null) {

        }
        this.tile = tileSystem.PixelXYToTileXY(pixel);
        tileSystem = TileSystem.INSTANCE;
        Tile tile = this.tile;
        if (tile == null) {

        }
        this.quadKey = tileSystem.TileXYToQuadKey(tile, i);

    }


}
