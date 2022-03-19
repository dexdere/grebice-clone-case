function youtube() {
  let youtubeDiv = document.querySelector(".youtube");
  let iframe = `<iframe width="1173px" height="692px" src="https://www.youtube.com/embed/lrf-GAYUOkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  youtubeDiv.innerHTML = iframe;
}
