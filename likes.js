document.querySelectorAll('.like-button').forEach((button) => {
  const project = button.dataset.project;
  const removeButton = document.querySelector(`.unlike-button[data-project="${project}"]`);
  const count = button.querySelector('span');
  let liked = localStorage.getItem(`byte-coder01-liked-${project}`) === 'true';

  function update() {
    button.innerHTML = `${liked ? '♥ Liked' : '♡ Like'} <span>${liked ? 1 : 0}</span>`;
    removeButton.hidden = !liked;
  }
  button.addEventListener('click', () => { liked = !liked; localStorage.setItem(`byte-coder01-liked-${project}`, liked); update(); });
  removeButton.addEventListener('click', () => { liked = false; localStorage.setItem(`byte-coder01-liked-${project}`, 'false'); update(); });
  update();
});
