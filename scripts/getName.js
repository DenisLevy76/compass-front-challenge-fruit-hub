const setName = (name) => {
  localStorage.setItem('name', name);
};

const handleSubmit = (event) => {
  event.preventDefault();

  const name = document.querySelector('.input').value.trim();

  if (name) {
    setName(name);
    window.location.href = '../home.html';
  }
};

if (localStorage.getItem('name')) window.location.href = '../home.html';
