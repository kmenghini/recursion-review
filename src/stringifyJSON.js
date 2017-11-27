// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null || typeof obj === undefined) {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'function') {
    return obj + '';
  }
  if (Array.isArray(obj)) {
    var collection = '';
    for (var i = 0; i < obj.length; i++) {
      collection += stringifyJSON(obj[i]) + ',';
    }
    return '[' + collection.slice(0, collection.length - 1) + ']';
  }
  if (typeof obj === 'object') {
    var collection = '';
    if (typeof obj !== 'null') {
      for (var key in obj) {
        if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
          collection += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }        
      }
    }
    return '{' + collection.slice(0, collection.length - 1) + '}';
  }
  return obj + '';
};