class player {
	constructor(){
		//widiht, height
		this.w = 50; 
		this.h = 50;

		//x position, y position
		this.x = 50;
		this.y = 400;

		//x speed, y speeed
		this.sx = 0;
		this.sy = 0;
	}

	forces(g, d){
		//gravity
		this.sy += g;

		//drag
		if (this.sx > 0){
			this.sx -= d;
		} else if (this.sx < 0){
			this.sx += d;
		}
	}

	collisions(){
		
	}

	controls(){
		//w
		if (keyIsDown(87)){
			this.sy = -20;
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
	}
}
