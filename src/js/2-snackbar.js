const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const delayInput = form.delay;
  const delay = Number(form.delay.value);
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
        timeout: 3000, 
        progressBar: true,
        transitionIn: "fadeInDown", 
        transitionOut: "fadeOutUp", 
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
        timeout: 3000,
        progressBar: true,
        transitionIn: "fadeInDown",
        transitionOut: "fadeOutUp",
      });
    });

    delayInput.value = "";
});
