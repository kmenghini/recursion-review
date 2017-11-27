// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // string, number, boolean, function, object
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === undefined) {
    return 'null';
  }
  if (obj === null) {
    return 'null';
  }
  // if (!obj) {
  //   return 'false';
  // }
  if (typeof obj === 'number') {
    return obj + '';
  }
  if (typeof obj === 'boolean') {
    return obj + '';
  }
  if (Array.isArray(obj)) {
    var collection = '';
    for (var i = 0; i < obj.length; i++) {
      collection += stringifyJSON(obj[i]) + ','; //1234 -> 1, 2, 3, 4,
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
if (typeof obj === 'function' ) { return obj + ''; }
  return obj + '';

};

console.log(stringifyJSON({'boolean, true': true, 'boolean, false': false, 'null': null }));

stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      console.log(expected);
      var result = stringifyJSON(test);
      console.log(result);
      expect(result).to.equal(expected);
    });