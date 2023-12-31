//=======================================================================
// 3D SCROLL

const FRAMES = document.querySelectorAll('.frame');

const zSpacing = -1000; // расстояние по оси z между блоками
let lastPos = zSpacing / 5; //
const zValues = [];

window.addEventListener('scroll', function () {
  const top = this.document.documentElement.scrollTop;
  // console.log('top:', top);

  const delta = lastPos - top;
  // console.log('delta:', delta);

  lastPos = top;
  // console.log('lastPos:', lastPos);

  FRAMES.forEach((frame, i) => {
    zValues.push(i * zSpacing + zSpacing);
    zValues[i] += delta * -5.5;

    frame.style.transform = `translateZ(${zValues[i]}px)`;
    frame.style.opacity = zValues[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
  });
});

window.scrollTo(0, 1);

// LOADER
window.addEventListener('load', function () {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 200);
});

//=======================================================================
// AUDIO

const SOUND_BUTTON = document.querySelector('.sound-btn');
console.log(SOUND_BUTTON);
const AUDIO = document.querySelector('.audio');

SOUND_BUTTON.addEventListener('click', function () {
  this.classList.toggle('paused');
  AUDIO.paused ? AUDIO.play() : AUDIO.pause();
});

window.addEventListener('focus', function () {
  SOUND_BUTTON.classList.contains('paused') ? AUDIO.pause() : AUDIO.play();
});

window.addEventListener('blur', function () {
  AUDIO.pause();
});
