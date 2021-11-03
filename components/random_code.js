//generating 5 digit random code
function new_alpha(length) {
  var end_result = "";
  var characters = "1234567890abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < length; i++) {
    var result = characters[Math.floor(Math.random() * characters.length)];
    //concatenating the single character//
    end_result += result;
  }

  return end_result;
}

console.log(new_alpha(5));
