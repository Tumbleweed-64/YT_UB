function linkgen() {
var og_url= prompt("Paste in your link here.");
og_url = og_url.replace("https://www.youtube.com/watch?v=", "");
var newlink = "https://www.youtube-nocookie.com/embed/" + og_url;
var fs = document.getElementById("fs")
var player = document.getElementById("player");
fs.setAttribute("href", newlink)
fs.setAttribute("target", "_blank")
player.setAttribute("src", newlink);
}
