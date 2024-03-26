const textDiv = document.querySelector('.play_div');
const playBtn = document.querySelector('.play_btn');

function onPlayBtn() {
  textDiv.innerHTML = "Hello Index Page!"
}

playBtn.addEventListener('click', onPlayBtn)