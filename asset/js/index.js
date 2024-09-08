let counter = 0;

// Selecting the elements
const display = document.getElementById('counterValue');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

// Increase the counter
increaseButton.addEventListener('click', () => {
  counter++;
  display.textContent = counter;
  display.style.color = '#191970';
});

// Decrease the counter
decreaseButton.addEventListener('click', () => {
  counter--;
  display.textContent = counter;
  if (counter < 0) {
    display.style.color = 'red';
  } else {
    display.style.color = '#191970';
  }
});

// Reset the counter
resetButton.addEventListener('click', () => {
  counter = 0;
  display.textContent = counter;
  display.style.color = '#191970';
});

// effect of the push for the '+' button
const originalShadows = {
  'arrow-left': 'inset 0 4px #fff, inset 0 -4px rgba(0, 0, 0, 0.2)',
  'arrow-top': 'inset 0 2px #fff',
  'arrow-right': 'inset 0 4px #fff, inset 0 -4px rgba(0, 0, 0, 0.2)',
  'arrow-bottom': 'inset 0 -4px rgba(0, 0, 0, 0.2)'
};


const directionalButtons = document.querySelectorAll('.arrow-left, .arrow-top, .arrow-right, .arrow-bottom');


directionalButtons.forEach(button => {
  button.addEventListener('mousedown', () => {
    directionalButtons.forEach(btn => {
      btn.style.boxShadow = 'none'; 
    });
  });

  button.addEventListener('mouseup', () => {
    directionalButtons.forEach(btn => {
      const buttonClass = btn.classList[0]; 
      btn.style.boxShadow = originalShadows[buttonClass]; 
    });
  });
});