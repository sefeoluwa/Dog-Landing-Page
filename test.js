var action = document.querySelector('#action');

var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'newcarousel');
newDiv.classList.toggle('newCarousel');
newDiv.textContent = 'Hello everybody!';
action.appendChild(newDiv)