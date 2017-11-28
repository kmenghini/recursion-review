// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // your code here
  element = element || document.body;

  var results = [];

  if (element.classList && element.classList.contains(className)) {
    results.push(element);
  }
  if (element.childNodes) {
    for (var i = 0; i < element.childNodes.length; i++) {
      results = results.concat(getElementsByClassName(className, element.childNodes[i]));
    }
  }
  return results;
};
