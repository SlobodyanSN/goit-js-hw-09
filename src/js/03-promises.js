import Notiflix from 'notiflix';



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
 for (let i = 0; i < Number(amount.value); i += 1) {
  createPromise(i + 1, Number(delay.value) + Number(step.value) * i)
  .then(({ position, delay }) => {
    Notify.success(`:белая_галочка: Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`:х: Rejected promise ${position} in ${delay}ms`);
  });
};