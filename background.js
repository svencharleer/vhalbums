// Sven Charleer
// 16 July 2017
// -- Fed up downloading all images one by one ;)

var links = [];
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  //var action_url = "javascript:window.print();";
  chrome.windows.getCurrent(function (currentWindow) {
      chrome.tabs.query({active: true, windowId: currentWindow.id},
                        function(activeTabs) {
        chrome.tabs.executeScript(
          activeTabs[0].id, {file: 'download.js', allFrames: true});
          chrome.tabs.executeScript(
            { code:'console.log("inscript");'
          })
      });

    });

});

chrome.extension.onRequest.addListener(function(links) {

  for (var index in links) {
    var tmp = links[index].replace('url("', "http:")
    var finalLink = tmp.replace('_thumb.jpg")', ".jpg")
    chrome.downloads.download({url: finalLink},
                                               function(id) {
        })

  }

});
