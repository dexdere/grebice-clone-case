function readMore(number) {
  var dots = document.querySelector(`.dots${number}`);
  var moreText = document.querySelector(`.more${number}`);
  var btnText = document.querySelector(`#more${number}`);
  var eye = `<img src="/public/icons/eye.svg" alt=""></img>`;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `Read more ${eye}`;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `Read less ${eye}`;
    moreText.style.display = "inline";
  }
}
