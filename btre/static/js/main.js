const date = new Date();

let el = document.querySelector('.year')
if (el) {
  console.log(el)
  el.innerHTML = date.getFullYear()
}

setTimeout(() => {
  $('#message').fadeOut('slow');
}, 3000);