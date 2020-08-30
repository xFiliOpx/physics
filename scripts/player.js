class player {
	constructor(){
		//widiht, height
		this.w = 50; 
		this.h = 50;

		//x position, y position
		this.x = 150;
		this.y = 100;

		//x speed, y speeed
		this.sx = 0;
		this.sy = 0;

		this.onGND = false;
	}

	forces(g, gd){
		//gravity
		this.sy += g;
		if (this.sy > 30){this.sy = 30;}
		//ground drag
		if (this.onGND){
			if (1 > this.sx &&  this.sx > -1){this.sx = 0;}
			if (this.sx > 0){
				this.sx -= gd;
			} else if (this.sx < 0){
				this.sx += gd;
			}
		}
	}

	collisions(boxes){
		if (this.onGND){this.onGND = false;}

		for (let i = 0; i < boxes.length; i++){
			if (boxes[i].x < this.x + this.w && boxes[i].x + boxes[i].w > this.x){
				if (this.sy > 0/* && this.y > 0*/){
					if (this.y + this.h + this.sy > boxes[i].y && this.y < boxes[i].y + boxes[i].h){
						this.y = boxes[i].y - this.h;
						this.sy = 0;
						this.onGND = true;
					}
				}
				if (this.sy < 0/* && this.y > 0*/){
					if (this.y + this.sy < boxes[i].y + boxes[i].h && boxes[i].y < this.y + this.h){
						this.y = boxes[i].y + boxes[i].h;
						this.sy = 0;
					}
				}
			}
			if (boxes[i].y < this.y + this.h && boxes[i].y + boxes[i].h > this.y){
				if (this.sx > 0){
					if (this.x + this.w + this.sx > boxes[i].x && this.x < boxes[i].x + boxes[i].w){
						this.x = boxes[i].x - this.w;
						this.sx = 0;
					}
				}
				if (this.sx < 0){
					if (this.x + this.sx < boxes[i].x + boxes[i].w &&  boxes[i].x < this.x + this.w ){
						this.x = boxes[i].x + boxes[i].w;
						this.sx = 0;
					}
				}
			}
		}
	}

	controls(){
		//w
		if (keyIsDown(87)){
			if (this.onGND){
				this.sy = -20;
			}
		}

		//d
		if (keyIsDown(68)){
			if (this.onGND){
				this.sx = 10;
			}
			if (this.sx < 10){
				this.sx += 1;
			}
		}

		//a
		if (keyIsDown(65)){
			if (this.onGND){
				this.sx = -10;
			}
			if (this.sx > -10){
				this.sx -= 1;
			}
		}
	}

	draw(color){
		this.x += this.sx;
  		this.y += this.sy;
		
		strokeWeight(0);
		if (color){fill(255,0,0)}
        else {fill(255)}
		rect(this.x, this.y, this.w, this.h)

		stroke(255,0,0)
		fill(255,0,0)
		line(this.x + this.w/2, this.y + this.h/2, this.sx *5, this.sy *5)
	}
}
