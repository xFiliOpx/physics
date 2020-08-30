class box {
    constructor(ix,iy,iw,ih){
        this.x = ix;
        this.y = iy;
        this.w = iw;
        this.h = ih;
        this.col;
    }
    draw(color){
        strokeWeight(0);
        if (color){fill(0,255,0)}
        else {fill(127)}
        rect(this.x, this.y, this.w, this.h)
    }
}