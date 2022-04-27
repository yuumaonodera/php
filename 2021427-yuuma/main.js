
window.addEventListener('load', function () {
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    alert("クリックされました");
  });
});

const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
});

const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});