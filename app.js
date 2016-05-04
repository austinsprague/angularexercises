
var name = document.querySelector('[name=name]').addEventListener('input', function (e) {
  document.querySelector('h1').innerHTML = e.target.value
});

document.addEventListener('DOMContentLoaded', name);
