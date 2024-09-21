collapsables = document.querySelectorAll(".collapsable:not(.normal)")
links = document.getElementsByClassName("url")
scrolling = false

document.onScroll = (e) => {
  scrolling = true
}

document.onScrollEnd = (e) => {
  scrolling = false
}

for (collapsable of collapsables) {
  collapsable.setAttribute("onclick", "event.preventDefault();if(!scrolling){this.open = this.open ? false : true}")
}

for (link of links) {
  link.onclick = (e) => {
    window.open(e.target.getAttribute("href"));
  }
}
