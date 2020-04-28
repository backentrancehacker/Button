function wait(ms){
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	})
}
async function sparkle(event){ 
	explode(event.clientX, event.clientY);
}
async function explode(x, y){
	let particles = 15,
		field = document.createElement('div');
	
	field.className = 'field';

	Object.assign(field.style, {
		left: `${x}px`,
		top: `${y}px`,
		transform: 'translate(-50%, -50%)'
	});
	
	document.body.append(field);

	let particleArray = [];
	for(let i = 0; i < particles; i++){ 
		let angle = random(0, 2*Math.PI),
			pX = field.offsetWidth/2 +  random(80, 150) * Math.cos(angle),
			pY = field.offsetHeight/2 + random(80, 150) * Math.sin(angle);


		let particle = document.createElement('div');
		particle.className = 'particle';
		let options = [
			{
				backgroundColor: '#fff',
				boxShadow: '0 0 1em silver'
			},
			{
				backgroundColor: 'dodgerblue',
				boxShadow: '0 0 1em #fff'
			}
		]
		let option = options[Math.floor(Math.random() * options.length)]
		Object.assign(particle.style, {
			left: `${pX}px`,
			top: `${pY}px`,
			backgroundColor: option.backgroundColor,
			boxShadow: option.boxShadow
		});
		
		field.appendChild(particle);
		particleArray.push(particle);
	}
	await wait(1100);
	for(let particle of particleArray){
		particle.remove();
	}
}
function random(min, max) {
	return Math.floor(Math.random() * (max + 1)) + min;
}

export default sparkle;
