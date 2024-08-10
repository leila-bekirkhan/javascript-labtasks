document.querySelector('#click-me-button').onclick = function () {
  let clickMeText = document.querySelector('#click-me-text');
  clickMeText.innerHTML = new Date();
  clickMeText.style.color = 'darkgreen';
}