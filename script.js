collapsables = document.querySelectorAll(".collapsable:not(.normal)")
links = document.getElementsByClassName("url")

for (collapsable of collapsables) {
  collapsable.setAttribute("onclick", "event.preventDefault();this.open = this.open ? false : true")
}

for (link of links) {
  link.onclick = (e) => {
    window.open(e.target.getAttribute("href"));
  }
}
