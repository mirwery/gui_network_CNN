document.addEventListener('mouseover', set_color);
document.addEventListener('mousedown', change_status_click);
document.addEventListener('mouseup', change_status_click);
btn.addEventListener('click', send_array)

let obj_array = [];
let m = [];
let size = 10;
let h = 28;
let w = 28;
let status_click = false;
let digital = 0;
create_arr(size, h, w);
setInterval(render, 17);

function change_status_click()
{	
	if (!status_click)
	{
		status_click = true;
	}
	else
	{
		status_click = false;
	}
}

async function send_array()
{
	digital = await eel.get_array(m)();
	//alert(digital);
	document.getElementById('id_digital').innerHTML = digital;
}

function set_color(){
	if (status_click == false) return;
 	let x = event.clientX;
 	let y = event.clientY;
	//alert(`${x}, ${y}`);
	let i, j;
	i = (y - (y % size)) / size;
	j = (x - (x % size)) / size;
	// для нахождения индекса из текущей координаты y и x вычитаем остаток и делим на длину кубиков
	//alert(`${j}, ${i}`);
	obj_array[i][j].div.style.backgroundColor = '#000000';
	obj_array[i + 1][j].div.style.backgroundColor = '#000000';
	obj_array[i - 1][j].div.style.backgroundColor = '#000000';
	obj_array[i][j + 1].div.style.backgroundColor = '#000000';
	obj_array[i][j - 1].div.style.backgroundColor = '#000000';
	m[i][j] = 1;
	m[i + 1][j] = 1;
	m[i - 1][j] = 1;
	m[i][j + 1] = 1;
	m[i][j - 1] = 1;
	send_array()
}

function create_arr(size, h, w)
{
	for (let i = 0; i < h; i++){
		m[i] = [];
		obj_array[i] = []
		for (let j = 0; j < w; j++){
			m[i][j] = 0;
			obj_array[i].push(new Cubic(i, j, size));
			//console.log(obj_array[i][j]);
		}
	}
/*
	for (let i = 0; i < h; i++)
	{
		for (let j = 0; j < w; j++)
		{
			console.log(m[i][j]);
		}
	}
	вывод координат кубов для проверки
*/ 
}

function render(){
	for (let i = 0; i < h; i++){
		for (let j = 0; j < w; j++){
			obj_array[i][j].render();
		}
	}
}