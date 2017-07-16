var links = [];

var container = document.querySelectorAll(".ia-al-itm");
for(var i = 0; i < container.length; i++)
{
  links.push(container[i].style.backgroundImage);
}
chrome.extension.sendRequest(links);
