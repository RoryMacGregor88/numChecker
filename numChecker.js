const form = document.querySelector('.form');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const num1 = Number(evt.target['text-box-1'].value);
  const num2 = Number(evt.target['text-box-2'].value);

  doesNumEqualNum(num1, num2);
});

function doesNumEqualNum(num1, num2) {
  const paragraphDiv = document.querySelector('.paragraph-div');
  paragraphDiv.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('p');

  if ( isNaN(num1) || isNaN(num2) ) {
    p.textContent = 'nums only, please';
  } else if ( Number.isInteger(num1) && Number.isInteger(num2) ) {
      if (num1 !== num2) {
        p.textContent = "num does not equal num"
      } else {
        p.textContent = "num equals num"
      };
  } else {
    p.textContent = 'sorry, numChecker™ does not support floats';
  };
  paragraphDiv.appendChild(p);

  const newNumButtonDiv = document.createElement('div');
  newNumButtonDiv.id = 'newNumButtonDiv';

  const newNumButton = document.createElement('input');
  newNumButton.value = 'Check another num';
  newNumButton.type = 'submit';
  newNumButton.classList.add('newNumButton');

  newNumButton.addEventListener('click', function() {
    const input1 = document.querySelector('#text-box-1');
    input1.value = '';
    input1.focus();
    const input2 = document.querySelector('#text-box-2');
    input2.value = '';
    newNumButtonDiv.innerHTML = '';
    paragraphDiv.innerHTML = '';
  });

  newNumButtonDiv.appendChild(newNumButton)
  paragraphDiv.appendChild(newNumButtonDiv);
};
