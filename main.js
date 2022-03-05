document.getElementById('chrollo').onclick = chrolloVid
document.getElementById('gon').onclick = gonVid
document.getElementById('killua').onclick = killuaVid
document.getElementById('kurapika').onclick = kurapikaVid


function chrolloVid() {
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.chrolloVid').style.display = 'flex'
  const video = document.querySelector("#chrolloVid");
  setTimeout(function() {
      video.play();
    }, 8500);
}

function gonVid() {
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.gonVid').style.display = 'flex'
  const video = document.querySelector("#gonVid");
  setTimeout(function() {
    video.play();
  }, 8500);
}

function killuaVid() {
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.killuaVid').style.display = 'flex'
  const video = document.querySelector("#killuaVid");
  setTimeout(function() {
    video.play();
  }, 8500);
}

function kurapikaVid() {
  document.querySelector('.main').style.display = 'none'
  document.querySelector('.kurapikaVid').style.display = 'flex'
  const video = document.querySelector("#kurapikaVid");
  setTimeout(function() {
    video.play();
  }, 8500);
}