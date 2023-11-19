$('.container').isotope({
    itemSelector: '.bcard',
    layoutMode: 'masonry',
    sortBy : 'random'
  });

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}  