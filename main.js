'use strict';

// elements

const adviceContainer = document.querySelector('.advice-container');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('.btn');

const renderSpinner = function () {
  const markup = `
        <div class="spinner">
          <img src="./images/icons.svg" alt="">
        </div>
        `;
  adviceText.innerHTML = '';
  adviceText.insertAdjacentHTML('afterbegin', markup);
};

const adviceGenerator = async function () {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data);
    console.log(data.slip.advice);
    const html = `
    <p class="adv-num">Advice #${data.slip.id}</p>
      <h1>
        "${data.slip.advice}"
      </h1>
      `;
    adviceText.innerHTML = '';
    adviceText.insertAdjacentHTML('afterbegin', html);
  } catch {
    console.error(error);
  }
};

diceButton.addEventListener('click', function (e) {
  //   renderSpinner();

  adviceGenerator();

  //   setTimeout(() => location.reload(), 5000);
});
