const tweetList = document.getElementById('tweet-list');
eventListeners();
function eventListeners() {
	document.querySelector('#form').addEventListener('submit', newTweet);
	tweetList.addEventListener('click', removeButton);
}
function newTweet(e) {
	e.preventDefault();
	//read the value
	const tweet = document.getElementById('tweet').value;
	console.log(tweet);
	//create the remove Button
	const removeBtn = document.createElement('button');
	removeBtn.innerHTML = 'X';
	removeBtn.classList.add('remove');
	//create an li
	const li = document.createElement('li');
	li.textContent = tweet;
	tweetList.appendChild(li);
	li.appendChild(removeBtn);
}
function removeButton(e) {
	if (e.target.classList.contains('remove')) {
		e.target.parentElement.remove();
	}
}
