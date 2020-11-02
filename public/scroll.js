function change() {
  navbar = document.getElementsByClassName("navbar")[0];
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  console.log(scrollTop)
  if (scrollTop > 500) {
    //show
    navbar.style.display = "block";
  } else {
    //hide
    navbar.style.display = "none";
  }
}
window.onscroll = change;
window.onload = change;