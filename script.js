function goTo(page) {
  window.location.href = page;
}

function handleForm(event) {
  event.preventDefault();
  document.getElementById("thankyou").classList.remove("hidden");
  event.target.reset();
}
