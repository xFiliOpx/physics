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

	forces(g, gd, ad){
		//gravity
		this.sy += g;
		if (this.sy > 25){this.sy = 25;}
		//ground drag
		if (this.onGND){
			if (1 > this.sx &&  this.sx > -1){this.sx = 0;}
			if (this.sx > 0){
				this.sx -= gd;
			} else if (this.sx < 0){
				this.sx += gd;
			}
			
		}
		//air drag
		if (!this.onGND){
			if (this.sx > 0){
				this.sx -= ad;
			} else if (this.sx < 0){
				this.sx += ad;
			}
		}
	}

	collisions(boxes, lme){
		if (this.onGND){this.onGND = false;}
		for (let i = lme; i < boxes.length; i++){
			if (this.sy > 0 && this.y > 0){
				if (this.y + this.h + this.sy > boxes[i].y && boxes[i].x < this.x + this.w){
					this.y = boxes[i].y - this.h;
					this.sy = 0;
					this.onGND = true;
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
			this.sx = 10;
		}

		//a
		if (keyIsDown(65)){
			this.sx = -10;
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
