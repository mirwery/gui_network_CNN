class Cubic{
	vx = 0;
	vy = 0;
	x = 0;
	y = 0;

	constructor(i, j, size){
		let div =  document.createElement('div');
		div.style.position = 'absolute';
		div.style.width = `${size}px`;
		div.style.borderRadius = "4px";
		div.style.height = `${size}px`;
		div.style.backgroundColor = '#000000';
		div.style.textAlign = 'center';
		div.style.backgroundColor = '#FFFFFF';
		div.style.border = 'solid #000000 1px';
		document.body.append(div);
		this.div = div;
		this.i = i;
		this.j = j;
		this.x = this.j * size;
		this.y = this.i * size;
		this.vx = 0;
		this.vy = 0;
		this.m = this.r**3;
	}
	
	render(){
		this.div.style.left = this.x;
		this.div.style.top = this.y;
	}

}
