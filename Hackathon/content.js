
chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
  let newDiv = document.createElement("div")
  newDiv.className = "anotherDiv"

  let oldOuter = document.getElementById("outer")

  for (let i = 1; i <= msg.action; i++) {


    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  var newColor = getRandomColor();
    let bouncyBalls = document.createElement("div");
    bouncyBalls.className = "circle animated bounceInDown"
    bouncyBalls.style.backgroundColor = '' + newColor + ''

    let balls = document.createElement("div")
    balls.className = "circle"
    console.log(msg.action)

    if (msg.action === 1) {
      document.getElementById("outer").appendChild(bouncyBalls)
    }
    else if (i === msg.action) {

      document.getElementById("outer").appendChild(bouncyBalls)
    }

    else {
      document.getElementById("outer").appendChild(balls)
    }
  }

});

// for(let i = 0; i < counter; i++){
  //if(i === 0){$('body').append('<div class = circle animated bounceInDown></div>')}
  //if(i !== counter -1){
      //$('.circle').prepend
   // }
//   $('body').append('<div class = circle animated bounceInDown></div>')
// }
// let counter = 0;
// counter += 1;
// console.log(counter)
//when appending divs we need to prepend the div to our outer continer
//if counter length greater than 1 then 
// if i = counter-1 then create the div class with circle animed boundInDown
//otherwise create div with only the class circle
//

// chrome.tabs.executeScript(id, {file: 'content.js'}, function() {
//   console.log('Successfully injected script into the page');
// })

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//   if (request.method == 'ping')
//     sendResponse({ data: 'pong' });
//   else 
//     sendResponse({});
// });

// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.sendRequest(tab.id, {method: 'ping'}, function(response) {
//     console.log(response.data);
//   });
// });