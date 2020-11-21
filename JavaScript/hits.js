/*jshint multistr:true */

var text = "Hello, how are you Srdjan. Sorry, I just forgot, \
            is your name Srdjan? I mean is Srdjan your official \
            first name?";
var myName = "Srdjan";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text.substring(i, i + myName.length) === myName) {
        for (var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}