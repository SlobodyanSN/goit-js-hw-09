import Notiflix from 'notiflix';

const form = document.querySelector(`.form`);
form.addEventListener(`submit`, onSubmit);

let delay = form.elements.delay.value;
let step = form.elements.step.value;
let amount = Number(form.elements.amount.value);

function onSubmit(e) {
  e.preventDefault();

  for (let i = 0; i < Number(form.elements.amount.value); i += 1) {
    createPromise(i+1, (Number(form.elements.delay.value) + (Number(form.elements.step.value) * i)))

    .then(({position, delay}) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.failure(
      `❌ Rejected promise ${position} in ${delay}ms`  
      );
    });  
  };
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
res({position, delay})      
    } else {
     
    rej({position, delay});
  }
}, delay);
});

