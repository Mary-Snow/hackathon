// // background.js

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });

// // This block is new!
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "open_new_tab" ) {
//       chrome.tabs.create({"url": request.url});
//     }
//   }
// );

let counter = 0;
let id;
chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab){
    console.log(tabId)
    chrome.tabs.update({url: "index.html"});
    counter ++;
    id = tabId.id
    console.log(counter)
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) { 
   if (changeInfo.status == 'complete') {   
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         chrome.tabs.sendMessage(tabs[0].id, {action: counter}, function(response) {});  
      });
   }
});

// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.sendRequest(tab.id, {method: 'ping'}, function(response) {
//     console.log(response.data);
//   });
// });



// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"counter":counter});
//   });
// });
