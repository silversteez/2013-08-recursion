// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result = "";
  if (typeof obj === "string") {
    result +='"' + obj + '"';
  }
  else if(Array.isArray(obj)){
    result += "[";
      _.each(obj, function(item, key) {
        result += stringifyJSON(item);
        if (obj.length-1 !== key) {
          result += ",";
        }
      });
    result += "]";
  }
  else if(obj === null){
    result += "null";
  }
  else if (typeof obj === "object") {
    result += "{";
      result  +=  _.map(obj, function(item, key) {
        if (item !== undefined) {
          return stringifyJSON(key) + ":" + stringifyJSON(item);
        }
      });
    result += "}";
  }
  else {
    result += '' + obj;
  }
  return result;
};
