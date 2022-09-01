const getName = () => {
  const name = localStorage.getItem('name');
  const userName = document.querySelector('.userName');

  console.log('teste');

  if (name) return (userName.innerHTML = `Welcome, ${name}.`);

  window.location.href = '../description.html';
};

getName();
