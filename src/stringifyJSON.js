// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result = "";
  if (typeof obj === "string") {
    result +='"' + obj + '"';
  } else if (typeof obj === "number"){
    result += obj.toString();
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
  return result;
};
