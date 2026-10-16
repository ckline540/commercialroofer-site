// CommercialRoofer.com — small behaviors: mobile nav, film strip loop, current page mark.
(function () {
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.burger');
  if (burger && nav) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // the film strip repeats its images once so the loop never shows a gap
  document.querySelectorAll('.film .track').forEach(function (t) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    t.innerHTML += t.innerHTML;
  });
  // mark the page we are on
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav li a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) a.setAttribute('aria-current', 'page');
  });
})();
