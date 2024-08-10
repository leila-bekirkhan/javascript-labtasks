document.querySelector('#click-me-button').onclick = function () {
	let clickMeText = document.querySelector('#click-me-text');
	clickMeText.innerHTML = '&lt; Welcome to the IT World, my friend &gt;';
	clickMeText.style.color = 'rgb(60, 30, 120)';
}