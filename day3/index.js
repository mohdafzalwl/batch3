const friends = [ 'A', 'B', 'C' ];

const uldiv1 = document.getElementById('ullist');
uldiv1.addEventListener('click', removeButton);

friends.forEach(function(list) {
	var output = document.createElement('li');
	output.innerHTML = list;
	let remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = 'X';
	output.appendChild(remove);
	uldiv1.appendChild(output);
});

function removeButton(event) {
	if (event.target.classList.contains('remove')) {
		console.log(event.target.parentElement);
		event.target.parentElement.remove();
	}
}
